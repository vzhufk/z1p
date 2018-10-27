const search = require("./search");
const fs = require("fs");

const CODES = fs.readdirSync(testFolder).map(f => f.replace(".js", ""));

const z1p = codes => {
  if (!codes) {
    codes = CODES;
  }

  const validate = codes.every(c => CODES.includes(c));

  if (!validate) {
    throw new Error(
      "Some of county codes are not supported. Provide valid codes."
    );
  }

  const methods = {
    raw: comp => CODES.reduce((a, v) => [...a, search(v, comp)])
  };

  return methods;
};

module.exports = z1p;
