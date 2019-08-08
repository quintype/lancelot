const fs = require("fs");
const path = require("path");
const prompts = require("prompts");
// const { ncp } = require("ncp");

const isDirectory = source => fs.statSync(source).isDirectory();

const source = path.join(__dirname, "src", "components", "rows");

fs.readdir(source, (err, files) => {
  if (err) throw err;

  (async () => {
    const response = await prompts([
      {
        type: "text",
        name: "projectPath",
        message: "Path of the project relative to the current directory:"
      },
      {
        type: "select",
        name: "componentFolder",
        message: "Which component is to be copied?",
        choices: files.filter(file => isDirectory(path.join(source, file))).map(file => ({ title: file, value: file }))
      }
    ]);

    // console.log(response);
    getDeps(response.componentFolder).then(data => {
      console.log("Data: ", data);
    });
  })();
});

const getDeps = componentPath =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(source, componentPath, "index.js"), (err, data) => {
      if (err) reject(err);

      const isRelativeImport = new RegExp('import .* from "\\.');
      const allDeps = data
        .toString()
        .split("\n")
        .filter(line => isRelativeImport.test(line) && !line.startsWith("//"));

      resolve(allDeps);
    });
  });

// const copyPasteFolder = (src, dest) => {
//   ncp(
//     path.join(source, response.componentFolder),
//     path.join(response.projectPath, "src", "components", "rows", response.componentFolder),
//     err => {
//       if (err) console.log(err);

//       console.log("Copied the folder!");
//     }
//   );
// };
