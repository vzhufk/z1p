const map = require("./map");

module.exports = (code, comp) => {
  const list = require(`../assets/${code}`).map;
  return list.filter(v => comp(map(v)));
};
