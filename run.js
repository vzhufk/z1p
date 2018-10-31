var fs = require("fs");

const CODES = fs.readdirSync("./assets");

CODES.map(c => {
  const current = require(`./assets/${c}/package`);
  current.name = `z1p.${c.toLowerCase()}`;
  current.description = `Zip data for ${c}.`;

  fs.writeFile(
    `./assets/${c}/package.json`,
    JSON.stringify(current, null, 2),
    () => {}
  );
});
