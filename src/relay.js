import * as R from "ramda";

module.exports = db => {
  db.onIn(msg => {
    const { from, noRelay } = msg;

    if (noRelay) return msg;
    R.without([from], db.connections).forEach(c =>
      c.send(R.assoc("skipValidation", true, msg))
    );
    return msg;
  });
  return db;
};
