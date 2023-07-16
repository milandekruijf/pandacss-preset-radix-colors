import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

import { COLOR_TOKENS, SEMANTIC_COLOR_TOKENS } from "./utils";

/**
 * The default dark mode condition that is used
 * to conditionally enable style when dark mode
 * is enabled.
 */
export const DEFAULT_DARK_MODE_CONDITION = ".dark &";

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
         * The condition used to conditionally style
         * when dark mode is enabled.
         *
         * You can then use `_dark` modifier inside of
         * your style objects.
         *
         * @default `.dark &`
         */
        condition: string;
      };
}

/**
 * Create a new preset using the provided options.
 *
 * @param options The preset options
 * @returns The preset
 */
export default function createPreset(options?: PresetOptions): Preset {
  const darkMode = options?.darkMode ?? false;

  // Get the dark mode condition if dark mode is enabled
  const darkModeCondition = darkMode
    ? typeof darkMode === "object"
      ? darkMode.condition
      : DEFAULT_DARK_MODE_CONDITION
    : undefined;

  // We do not need to generate semantic color tokens if dark mode is not enabled
  const semanticColorTokens = darkMode ? SEMANTIC_COLOR_TOKENS : undefined;

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
