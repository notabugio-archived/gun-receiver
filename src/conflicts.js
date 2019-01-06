/* globals Promise */
import { keys, prop, path } from "ramda";

export default db => {
  db.onIn(msg => {
    const { json } = msg;
    const updatedVectors = [];
    const putKeys = keys(prop("put", json));

    if (!putKeys.length) return Promise.resolve(msg);
    return Promise.all(
      putKeys.map(soul => {
        const putVectors = path(["put", soul, "_", ">"], json) || {};

        return db.get(soul, { noRelay: true }).then(node => {
          const knownVectors = path(["_", ">"], node) || {};

          keys(putVectors).forEach(key => {
            if (knownVectors[key] && knownVectors[key] > putVectors[key]) {
              return;
            }
            updatedVectors.push(putVectors[key]);
          });
        });
      })
    ).then(() => (updatedVectors.length || json.get ? msg : null));
  });
  return db;
};
