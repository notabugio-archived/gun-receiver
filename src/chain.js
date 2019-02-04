/* globals Promise */
import * as R from "ramda";
import uuid from "uuid";

export default db => {
  const getPath = (keyList, opts = {}) => {
    let thisChain;
    const on = fn => {
      let value, getValue;
      let hasResponse = false;
      const bound = fn.bind(thisChain);
      const received = val => (hasResponse = true) && bound((value = val));
      const requested = {};
      const requests = {};
      const graph = {};

      const connection = db.connected(msg => {
        const { json } = msg;
        const at = R.prop("@", json);
        const atSoul = requests[at];
        const souls = R.keys(R.prop("put", json));

        if (atSoul) souls.push(atSoul);
        if (!souls.length) return;
        R.uniq(souls).forEach(soul => {
          if (!requested[soul]) return;
          const node = R.path(["put", soul], json);

          if (!node && !hasResponse) received();
          if (node) graph[soul] = R.mergeDeepLeft(node, graph[soul] || {});
        });
        const nextValue = getValue(keyList);

        if (nextValue !== value) received(nextValue);
      });

      const getNode = soul => {
        if (requested[soul]) return graph[soul];
        const id = uuid.v4();

        requested[soul] = id;
        requests[id] = soul;
        connection.receive({
          ...opts,
          json: { "#": id, get: { "#": soul } },
          skipValidation: true
        });
        return graph[soul];
      };

      getValue = kl => {
        const lastKey = kl[kl.length - 1];

        if (kl.length === 1) return getNode(lastKey);
        const parentValue = getValue(kl.slice(0, kl.length - 1));

        if (!parentValue) return undefined;
        const value = R.prop(lastKey, parentValue);

        if (value && value["#"]) return getNode(value["#"]);
        if (kl === keyList) received(value);
        return value;
      };

      connection.receive({ json: { leech: true } });
      getValue(keyList);
      return () => db.disconnected(connection);
    };

    const then = (fn = R.identity) =>
      new Promise(resolve => {
        const unsubscribe = on(val => {
          resolve(val);
          unsubscribe();
        });
      }).then(fn);

    const once = fn => then(fn.bind(thisChain)) && thisChain;
    const get = (key, opts = {}) => getPath([...keyList, key], opts);

    thisChain = { get, on, then, once };
    return thisChain;
  };

  const getDiff = put => {
    const souls = R.keys(put);
    const diffs = {};

    if (!souls.length) return Promise.resolve({});
    return Promise.all(
      souls.map(soul =>
        db.get(soul, { noRelay: true }).then(existing => {
          const diff = db.diffNode(existing, put[soul]);

          if (diff) diffs[soul] = diff;
        })
      )
    ).then(() => {
      if (!R.keys(diffs).length) return null;
      return diffs;
    });
  };

  db.get = (key, opts = {}) => getPath([key], opts);
  db.getDiff = getDiff;
  return db;
};
