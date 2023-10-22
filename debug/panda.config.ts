import { defineConfig } from "@pandacss/dev";

import radixColorsPreset from "../dist";

export default defineConfig({
  presets: [radixColorsPreset({ darkMode: true }), "@pandacss/preset-panda"],
  outdir: "debug/out",
});
