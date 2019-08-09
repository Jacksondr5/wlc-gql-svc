import * as fs from "fs";
import * as path from "path";
import recursiveReadDir = require("recursive-readdir");

const copyFiles = () => {
  recursiveReadDir("./src")
    .then(files => files.filter(name => name.match(/\.*\.graphql/)))
    .then(files =>
      files.forEach(file => {
        const dest = file.replace(/^src/, "dist");
        fs.mkdirSync(path.parse(dest).dir, {
          recursive: true
        });
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
