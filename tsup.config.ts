import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: true,
  outDir: "dist",
  ...options,
}));
