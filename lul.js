const z1p = require("./index");

const result = z1p([]).raw(v => v.zip_code == "59330");
console.log(result);
