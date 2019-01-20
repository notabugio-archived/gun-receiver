/* globals Promise */
import { assocPath, path, without } from "ramda";
import uuid from "uuid";

function processQueue() {
  let fns = [];
  const queue = fn => fns.push(fn);
  const dequeue = fn => (fns = without([fn], fns));

  function execute(msg) {
    const remainingFns = fns.slice().reverse();
    const executeNext = msg => {
      try {
        const fn = remainingFns.pop();

        if (msg && fn) return Promise.resolve(fn(msg)).then(executeNext);
        return Promise.resolve(msg);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    return executeNext(msg);
  }

  return [queue, execute, dequeue];
}

function pistolConnection({ db, send: sendFn }) {
  let connection;
  let state = {};
  let hasReportedError = false;
  const get = p => path(p, state);
  const set = (p, v) => (state = assocPath(p, v, state)); // && console.log(state);
  const msgId = () => uuid.v4();
  const send = msg =>
    db
      .processOut({ ...msg, to: connection })
      .then(r => r && sendFn(r))
      .catch(err => {
        if (!hasReportedError) {
          console.error(
            "PISTOL send err",
            JSON.stringify(msg, null, 2),
            msg.json.put,
            err
          );
        }
        hasReportedError = true;
      });
  const receive = ({ json, raw, ...opts }) => {
    const preserved = raw || JSON.stringify(json, null, 2);

    return db
      .processIn({
        ...opts,
        db,
        json: { ...json, "#": json["#"] || uuid.v4() },
        from: connection
      })
      .catch(err => console.error("PISTOL receive err", err, preserved));
  };

  connection = { send, receive, get, set, msgId };
  return connection;
}

export default function Receiver() {
  let peer;
  const connections = [];
  const [onIn, processIn] = processQueue();
  const [onOut, processOut] = processQueue();

  function connected(send) {
    const connection = pistolConnection({ db: peer, send });

    connections.push(connection);
    return connection;
  }

  function disconnected(connection) {
    const connectionIdx = connections.indexOf(connection);

    if (connectionIdx !== -1) connections.splice(connectionIdx, 1);
  }

  peer = {
    connections,
    connected,
    disconnected,
    onIn,
    onOut,
    processIn,
    processOut
  };
  return peer;
}
