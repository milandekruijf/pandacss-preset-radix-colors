import { definePreset } from "@pandacss/dev";
import { getColorTokens } from "./utils";

export interface PresetOptions {
  // darkMode?: boolean | { condition: string };
}

export default function (options: PresetOptions) {
  // const darkMode = options.darkMode ?? false;

  return definePreset({
    theme: {
      extend: {
        tokens: {
          colors: getColorTokens(),
        },
      },
    },
  });
}
