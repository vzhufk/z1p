const fs = require("fs");

const iso = require("iso-country-codes");

const CODES = fs.readdirSync("./assets");

const template = require("../package.json");

const version = `0.0.3`;

CODES.forEach(code => {
  const name = iso.byAlpha2[code].name;
  const alpha2 = code;
  const alpha3 = iso.byAlpha2[code].alpha3;
  const numeric = iso.byAlpha2[code].numeric;

  const current = template;

  current.name = `@z1p/${code.toLocaleLowerCase()}`;
  current.version = version;
  current.description = `Geodata of ${name} for z1p module.`;
  current.keywords.push(name, alpha2, alpha3, numeric);

  delete current.scripts;
  delete current.engines;
  delete current.devDependencies;

  fs.writeFileSync(
    `./assets/${code}/package.json`,
    JSON.stringify(current, null, 2)
  );
});
