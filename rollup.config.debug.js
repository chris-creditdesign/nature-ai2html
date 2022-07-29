import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import packageJson from "./package.json";

export default {
  input: "src/debug.ts",
  output: {
    file: `dist/nature-ai2html-debug-v${packageJson.version}.js`,
    format: "iife",
  },
  plugins: [typescript({ module: "ES2015" }), json()],
};
