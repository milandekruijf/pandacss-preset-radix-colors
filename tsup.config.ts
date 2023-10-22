import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: false,
  outDir: "dist",
  external: ["@pandacss/dev"],
  ...options,
}));
