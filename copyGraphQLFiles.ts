import * as fs from "fs";
import recursiveReadDir = require("recursive-readdir");

const copyFiles = () => {
  recursiveReadDir("./src")
    .then(files => files.filter(name => name.match(/\.*\.graphql/)))
    .then(files =>
      files.forEach(file => {
        console.log(file);
        const dest = file.replace(/^src/, "dist");
        console.log("mkdir");
        console.log(`dest: ${dest.replace(/\\{1}(\w*)\.graphql$/, "")}`);
        fs.mkdirSync(dest.replace(/\\{1}(\w*)\.graphql$/, ""), {
          recursive: true
        });
        console.log("cp");
        console.log(fs.lstatSync(file).isDirectory());
        console.log(fs.existsSync(dest));
        if (fs.existsSync(dest)) {
          console.log(fs.lstatSync(dest).isDirectory());
        }
        fs.copyFileSync(file, dest);
      })
    );
};

copyFiles();

if (process.argv[2] === "--watch") {
  fs.watch("./src", (eventType, fileName) => {
    if (eventType === "change" && fileName.match(/.*\.graphql/)) {
      copyFiles();
    }
  });
}
