import * as R from "ramda";
import uuid from "uuid";

const MSG_TOPIC = "gun:msg";

module.exports = db => {
  const pm2 = require("pm2");
  const id = uuid.v4();

  pm2.launchBus((err, bus) => {
    if (err) console.err(err);
    bus.on("process:msg", packet => {
      if (packet.raw.msg.fromCluster === id) return;
      if (packet.raw.topic === MSG_TOPIC) {
        db.processIn(R.assoc("db", db, packet.raw.msg)).catch(err =>
          console.error("PISTOL cluster err", err)
        );
      }
    });
  });

  db.onIn(msg => {
    const { fromCluster, noRelay } = msg;

    if (noRelay || fromCluster) return msg;
    if (process.send) {
      process.send({
        topic: MSG_TOPIC,
        msg: R.mergeLeft({ fromCluster: id, skipValidation: true }, msg)
      });
    }
    return msg;
  });

  return db;
};
