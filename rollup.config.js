import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import image from "rollup-plugin-image";
// import svgSprite from "rollup-plugin-svg-sprite";
import sass from "rollup-plugin-sass";
import resolve from "rollup-plugin-node-resolve";
import packageJson from "./package.json";
// import requireContext from "rollup-plugin-require-context";

// if (require.context) {
//   const req = require.context("../../../../assets/icons/", true, /\.svg$/);
//   req.keys().forEach(filename => {
//     console.log(filename);
//     return req(filename);
//   });
// }
const dependencies = packageJson.dependencies || {};
const commonConfig = {
  input: "./src/index.js",
  plugins: [
    resolve({
      mainFields: ["module", "main", "index"],
      modulesOnly: true,
      browser: true,
      customResolveOptions: {
        moduleDirectory: "js_modules"
      }
    }),
    image(),
    sass(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      presets: [["@babel/env", { modules: false }], "@babel/preset-react"]
    }),
    postcss({
      modules: true
    })
    // requireContext(),
    // svgSprite({
    //   outputFolder: "dist/icons"
    // })
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
