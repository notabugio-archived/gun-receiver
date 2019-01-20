import { path, keys } from "ramda";
const MAX_MSG_ID_CACHE = 50000;
const GARBAGE_INTERVAL = 60000;

export default db => {
  const receivedIds = {};

  function collectGarbage() {
    let ids = keys(receivedIds).reverse();

    while (ids.length > MAX_MSG_ID_CACHE) {
      delete receivedIds[ids.pop()];
    }
  }

  db.onIn(msg => {
    const id = path(["json", "#"], msg);

    if (!id || id in receivedIds) return null;
    receivedIds[id] = true;
    return msg;
  });

  setInterval(collectGarbage, GARBAGE_INTERVAL);

  return db;
};
