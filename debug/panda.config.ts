import { defineConfig } from "@pandacss/dev";

import radixColorsPreset from "../dist";

export default defineConfig({
  presets: [radixColorsPreset(), "@pandacss/preset-panda"],
  theme: {
    extend: {
      tokens: {},
    },
  },
  outdir: "debug/out",
});
