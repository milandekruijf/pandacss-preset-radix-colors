import { defineConfig } from "@pandacss/dev";

import radixColorsPreset from "../dist";

export default defineConfig({
  presets: [radixColorsPreset({ darkMode: false }), "@pandacss/preset-panda"],
  outdir: "debug/out",
});
