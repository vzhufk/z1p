module.exports = (code, comp) => {
  const list = require(`./assets/${code}`);
  return list.find(comp);
};
