const z1p = require("./index.js");

const ua = z1p();

console.log(ua.raw(c => c.zip_code == "10000"));
