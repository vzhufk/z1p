const shell = require("shelljs");
const fs = require("fs");

const CODES = fs.readdirSync("./assets");

shell.cd("assets");

CODES.forEach(code => {
  shell.cd(code);
  shell.exec(`npm publish --access=public`);
  shell.cd(`..`);
});
