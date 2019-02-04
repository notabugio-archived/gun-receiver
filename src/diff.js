import * as R from "ramda";

const GRACE = 10 * 60 * 1000; // How far ahead clock can be, unlike gun we just discard not defer
const Lexical = JSON.stringify; // This is what Gun uses

export const diffNode = (existing, updated, machineState = null) => {
  let maxState = (machineState || new Date().getTime()) + GRACE; // eslint-disable-line
  const existingState = R.path(["_", ">"], existing) || {};
  const updatedState = R.path(["_", ">"], updated) || {};

  return R.compose(
    vals => {
      const keys = R.keys(vals);

      if (!keys.length) return null;
      return R.assoc(
        "_",
        R.assoc(">", R.pick(keys, updatedState), updated._),
        vals
      );
    },
    R.reduce((updates, key) => {
      const existingKeyState = existingState[key];
      const updatedKeyState = updatedState[key];

      if (updatedKeyState > maxState || !updatedKeyState) return updates;
      if (existingKeyState && existingKeyState >= updatedKeyState)
        return updates;

      if (existingKeyState === updatedKeyState) {
        const existingVal = R.prop(key, existing);
        const updatedVal = R.prop(key, updated);

        // This is based on Gun's logic
        if (Lexical(updatedVal) <= Lexical(existingVal)) return updated;
      }
      updates[key] = updated[key];
      return updates;
    }, {}),
    R.keys
  )(updatedState);
};
