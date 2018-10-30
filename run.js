var fs = require("fs");

const CODES = fs.readdirSync("./assets");
CODES.map(c => {
  fs.readFile(`./assets/${c}`, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/null/g, "");

    fs.writeFile(`./assets/${c}`, result, "utf8", function(err) {
      if (err) return console.log(err);
    });
  });
});
