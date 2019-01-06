/* globals Promise */
import { keys, path, prop } from "ramda";
const uuid = require("uuid");
const flatten = require("flat");

const FIELD_SIZE_LIMIT = 100000;

const unfuck = obj => {
  // This is probably only necessary if you are stupid like me and use the default . delimiter for flatten
  if (!obj) return obj;
  let arrow = (obj._ && obj._[">"]) || {};

  keys(arrow).forEach(function(key) {
    let value = arrow[key];

    if (typeof value === "object") {
      let valKeys = keys(value);
      let remainder = valKeys[0];

      if (remainder) {
        let realKey = [key, valKeys].join(".");
        let realValue = value[remainder];

        delete arrow[key];
        arrow[realKey] = realValue;
        realValue = (obj[key] && obj[key][remainder]) || null;
        delete obj[key];
        obj[realKey] = realValue;
      }
    }
  });
  keys(obj).forEach(key => {
    if (key[0] === ".") delete [key];
  });
  return obj;
};

function fromRedis(obj) {
  if (!obj) return obj;
  const sorted = {};

  Object.keys(obj).forEach(function(key) {
    if (key[0] === ".") delete obj[key];

    if (obj[key] === "|NULL|") {
      obj[key] = null;
    }
    if (obj[key] === "|UNDEFINED|") {
      obj[key] = undefined;
    }

    if (/>\./.test(key)) {
      obj[key] = parseFloat(obj[key], 10) || obj[key];
    }
    if (obj[key] && obj[key].length > FIELD_SIZE_LIMIT) {
      obj[key] = obj[key].slice(0, FIELD_SIZE_LIMIT);
      console.log("truncated", key);
    }
  });

  obj = unfuck(flatten.unflatten(obj));

  Object.keys(obj)
    .sort()
    .forEach(key => (sorted[key] = obj[key]));

  return sorted;
}

export const respondToGets = db => {
  const redis = require("redis").createClient();

  const readFullNode = soul =>
    new Promise((resolve, reject) => {
      if (!soul) return resolve(null);
      return redis.hgetall(soul, function(err, res) {
        if (err) {
          console.error("get error", err);
          reject(err);
        } else {
          const data = fromRedis(res);

          resolve(data);
        }
      });
    });

  db.onIn(msg => {
    const { from, json } = msg;
    const soul = path(["get", "#"], json);
    const dedupId = prop("#", json);

    if (!soul) return msg;
    return readFullNode(soul).then(result => {
      const json = {
        "#": uuid.v4(),
        "@": dedupId,
        put: { [soul]: result || undefined }
      };

      // Skip validation to avoid losing undefined when no result
      from.send({ json, ignoreLeeching: true, skipValidation: !result });
      if (!result) return msg; // allow next handler
      // Pass through oracle queries
      return soul.indexOf("@~") === -1 ? null : msg;
    });
  });

  return db;
};
