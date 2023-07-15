import { definePreset } from "@pandacss/dev";
import { COLOR_TOKENS, getSemanticColorTokens } from "./utils";

export const DEFAULT_CONDITION = ".dark &";

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

  // Get the dark mode condition if dark mode is enabled
  const darkModeCondition = darkMode
    ? typeof darkMode === "object"
      ? darkMode.condition
      : DEFAULT_CONDITION
    : undefined;

  // We do not need to generate semantic color tokens if dark mode is not enabled
  const semanticColorTokens = darkMode ? getSemanticColorTokens() : undefined;

  return definePreset({
    conditions: {
      dark: darkModeCondition,
    },
    theme: {
      extend: {
        tokens: {
          colors: COLOR_TOKENS,
        },
        semanticTokens: {
          colors: semanticColorTokens,
        },
      },
    },
  });
}
