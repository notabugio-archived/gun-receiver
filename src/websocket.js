import { curry } from "ramda";
import WS from "ws";
import ReconnectingWebSocket from "reconnecting-websocket";

const PING = 60000;

const wsConnection = curry((db, ws) => {
  let hasLoggedErr = false;
  let connected = true;

  const connection = db.connected(msg => {
    if (!msg || !msg.json || !connected) return;
    ws.send(JSON.stringify(msg.json), err => {
      if (!err || hasLoggedErr) return;
      console.warn("ws send err", err);
      hasLoggedErr = true;
    });
  });

  const pingInterval = setInterval(
    () => connection.send({ json: { ping: true }, skipValidation: true }),
    PING
  );

  const receive = msg => {
    try {
      const json = JSON.parse(msg.data || msg);

      Array.isArray(json)
        ? json.forEach(receive)
        : connection.receive({ json });
    } catch (e) {
      console.error("RECEIVER invalid ws msg", e, msg.data);
    }
  };

  ws.addEventListener("close", () => {
    if (ws.reconnect) return;
    connected = false;
    clearInterval(pingInterval);
    db.disconnected(connection);
  });

  ws.addEventListener("message", receive);
  return connection;
});

export const server = curry(({ web, port }, db) => {
  new WS.Server({ port: !web ? port : undefined, server: web }).on(
    "connection",
    wsConnection(db)
  );
  return db;
});

export const client = curry((url, db) => {
  const ws = new ReconnectingWebSocket(url, [], { WebSocket: WS });

  ws.addEventListener("open", () => wsConnection(db, ws));
  return db;
});