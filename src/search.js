const map = require("./map");

module.exports = (data, comp) => {
  let isCompresed = false;
  if (typeof data === "string") {
    data = require(`@z1p/${data.toLowerCase()}`);
    isCompresed = true;
  }

  if (!Array.isArray(data)) {
    throw new Error("z1p Data is invalid.");
  }

  return data.reduce((a, v) => {
    if (isCompresed) {
      v = map(v);
    }

    if (comp(v)) {
      a.push(v);
    }

    return a;
  }, []);
};
