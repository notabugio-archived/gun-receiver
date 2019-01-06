export { default as chainInterface } from "./chain";
export { default as preventConflicts } from "./conflicts";
export { default as Receiver } from "./core";
export { default as deduplicateMessages } from "./dedup";
export { default as allowLeech } from "./leech";
import * as redis from "./redis";
export { default as relayMessages } from "./relay";
import * as websocket from "./websocket";

export const redisBackend = redis;
export const websocketTransport = websocket;
