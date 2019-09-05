import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import image from "rollup-plugin-image";
import packageJson from "./package.json";
const dependencies = packageJson.dependencies || {};

const commonConfig = {
  input: "src/index.js",
  plugins: [
    image(),
    resolve({
      mainFields: ["module", "main", "index"],
      modulesOnly: true,
      browser: true,
      customResolveOptions: {
        moduleDirectory: "js_modules"
      }
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      presets: [["@babel/env", { modules: false }], "@babel/preset-react"]
    }),
    postcss({
      modules: true
    })
  ],
  external: file => Object.keys(dependencies).includes(file) || file.startsWith("babel-plugin-react-css-modules")
};

export default [
  {
    output: [{ format: "cjs", file: packageJson.main }],
    ...commonConfig
  },
  {
    output: [{ format: "esm", file: packageJson.module }],
    ...commonConfig
  }
];
