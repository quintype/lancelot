const fs = require("fs");
const path = require("path");
const prompts = require("prompts");
const { ncp } = require("ncp");

const DIR_TYPE = Object.freeze({
  ROWS: "rows",
  ATOMS: "atoms",
  UTILS: "utils",
  CARDS: "cards"
});

const isDirectory = source => fs.statSync(source).isDirectory();

const source = type => path.join(__dirname, "src", "components", type);

fs.readdir(source(DIR_TYPE.ROWS), (err, files) => {
  // Read all Rows from the component directory
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
        choices: files
          .filter(file => isDirectory(path.join(source(DIR_TYPE.ROWS), file)))
          .map(file => ({ title: file, value: file }))
      }
    ]);

    const projectComponentPath = path.resolve(response.projectPath, "app", "isomorphic");
    // Path where the publisher app components will need to be

    createComponentDirectoriesIfNotExists(path.join(projectComponentPath, "components"));

    getDepsAndCopyPasteAllComponents(response.componentFolder, DIR_TYPE.ROWS).then(data => {
      const componentSource = path.resolve(source(DIR_TYPE.ROWS), response.componentFolder);
      const allDeps = data
        .map(line => path.resolve(componentSource, line.match(/".+"/)[0].slice(1, -1)))
        .filter(path => path.includes("/src/components/"))
        .map(dep => dep.replace(new RegExp(/\/utils.*/), "/utils")) // remove utils filename imports
        .map(dep => dep.replace(new RegExp(/\/index$/), "")); // remove imports with index in the end
      allDeps.unshift(componentSource);
      const allPaths = [...new Set(allDeps)].map(path => ({
        currentPath: path,
        copyPath: generateCopyPath(projectComponentPath, path)
      }));
      allPaths.forEach(({ currentPath, copyPath }) => copyPasteFolder(currentPath, copyPath));
    });
  })();
});

const getDepsAndCopyPasteAllComponents = (componentPath, type) =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(source(type), componentPath, "index.js"), (err, data) => {
      if (err) reject(err);

      const isRelativeImport = new RegExp('import .* from "\\.');
      const allDeps = data
        .toString()
        .split("\n")
        .filter(line => isRelativeImport.test(line) && !line.startsWith("//"));

      resolve(allDeps);
    });
  });

const generateCopyPath = (projectComponentPath, currentComponentPath) =>
  projectComponentPath.concat(currentComponentPath.split("/src")[1]);

const copyPasteFolder = (src, dest) => {
  ncp(src, dest, err => {
    if (err) console.log(err);

    console.log(`Copied: ${dest}`);
  });
};

const createComponentDirectoriesIfNotExists = projectComponentPath => {
  const componentDirs = Object.values(DIR_TYPE).map(dir => path.join(projectComponentPath, dir));

  componentDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
};
