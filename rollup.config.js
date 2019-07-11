import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";
const dependencies = packageJson.dependencies || {};

const commonConfig = {
  input: "src/index.js",
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
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
