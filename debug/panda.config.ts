import { defineConfig } from "@pandacss/dev";

import radixColorsPreset from "../dist";

export default defineConfig({
  presets: [
    radixColorsPreset({
      darkMode: true,
      autoP3: true,
      colorScales: ["gray", "blue"],
    }),
    // "@pandacss/preset-panda",
  ],
  outdir: "debug/out",
});
