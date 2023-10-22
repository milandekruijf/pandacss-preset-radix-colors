import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { getTokens } from "./tokens";
import { getSemanticTokens } from "./semantic-tokens";

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
export function createPreset(options?: PresetOptions): Preset {
  const darkMode = options?.darkMode ?? false;

  // Get the dark mode condition if dark mode is enabled
  const darkModeCondition = darkMode
    ? typeof darkMode === "object"
      ? darkMode.condition
      : DEFAULT_DARK_MODE_CONDITION
    : undefined;

  return definePreset({
    conditions: {
      extend: {
        dark: darkModeCondition,
      },
    },
    theme: {
      extend: {
        tokens: {
          colors: getTokens(),
        },
        semanticTokens: {
          colors: darkMode ? getSemanticTokens() : {},
        },
      },
    },
  });
}
