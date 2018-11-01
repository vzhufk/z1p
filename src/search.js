const map = require("./map");

module.exports = (data, comp) => {
  let isCompressed = false;

  if (typeof data === "string") {
    try {
      data = require(`@z1p/${data.toLowerCase()}`);
    } catch (e) {
      console.error(
        `\n@z1p/${data.toLowerCase()} not installed!\nPlease run "npm install @z1p/${data.toLowerCase()}"`
      );
    }

    isCompressed = true;
  }

  if (!Array.isArray(data)) {
    throw new Error("z1p Data is invalid.");
  }

  return data.reduce((a, v) => {
    if (isCompressed) {
      v = map(v);
    }

    if (comp(v)) {
      a.push(v);
    }

    return a;
  }, []);
};
