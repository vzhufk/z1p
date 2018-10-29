const fs = require("fs");
const CODES = fs.readdirSync("../assets");

const fn = code => {
  let list = require(`../assets/${code}`);
  list = list.map(v => {
    const result = [
      v["accuracy"],
      v["community"],
      v["community_code"],
      v["country_code"],
      v["latitude"],
      v["longitude"],
      v["place"],
      v["province"],
      v["province_code"],
      v["state"],
      v["state_code"],
      v["zip_code"]
    ];
    return result.map(e => {
      if (e == "") {
        return undefined;
      }
      return e;
    });
  });
  const parsed = JSON.stringify(list);
  fs.writeFileSync(`../as/${code}`, `module.exports=${parsed}`);
};

CODES.map(fn);
