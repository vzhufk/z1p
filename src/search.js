const map = require("./map");

module.exports = (code, comp) => {
  const list = require(`../assets/${code}`);
  return list.reduce((a, v) => {
    v = map(v);

    if (comp(v)) {
      a.push(v);
    }

    return a;
  }, []);
};
