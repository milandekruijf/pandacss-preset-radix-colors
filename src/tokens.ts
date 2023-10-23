import { getScales } from "./radix-colors";
import { keysToObj, mergeObjs } from "./utils";

// TODO: Maybe clean up a little bit, it's hard to read.
export function getTokens(darkMode?: boolean) {
  const scales = getScales(darkMode);

  return mergeObjs(
    {},
    ...scales.map((scale) => {
      return keysToObj(
        scale.tags,
        Object.assign(
          {},
          ...Object.entries(scale.shades).map(([i, value]) => {
            return {
              [i]: {
                value,
              },
            };
          })
        )
      );
    })
  );
}