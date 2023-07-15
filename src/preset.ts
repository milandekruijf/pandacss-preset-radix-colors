import { definePreset } from "@pandacss/dev";
import { getColorTokens } from "./utils";

/**
 * Options for the preset.
 */
export interface PresetOptions {
  /**
   * Enable dark mode. If `true`, dark mode will
   * be enabled using the default condition.
   */
  darkMode?:
    | boolean
    | {
        /**
         * The condition to enable dark mode.
         *
         * @default `.dark &`
         */
        condition: string;
      };
}

/**
 * The preset function. This will return a PandaCSS preset
 *
 * @param options The preset options
 * @returns The preset
 */
export default function (options?: PresetOptions) {
  const darkMode = options?.darkMode ?? false;

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
