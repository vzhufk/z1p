const search = require("./search");
const memoryAdapter = require("./adapter");

const z1p = (codes, options) => {
  options = { memorize: false, adapter: memoryAdapter, ...options };

  const methods = {
    raw: comp =>
      codes.reduce((a, v) => {
        const val = search(v, comp) || [];
        return [...a, ...val];
      }, []),
    findBy: (key, value) =>
      codes.reduce((acc, code) => {
        let result;

        if (options.memorize) {
          const memoryKey = `${code}:${key}:${value}`;
          const memory = options.adapter.get(memoryKey);

          if (memory.length) {
            result = memory;
          } else {
            result = search(code, e => e[key] === value);
            options.adapter.set(memoryKey, result);
          }
        } else {
          result = search(code, e => e[key] === value);
        }

        return [...acc, ...result];
      }, [])
  };

  return methods;
};

module.exports = z1p;
