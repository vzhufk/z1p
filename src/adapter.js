const memo = {};

module.exports = {
  get: key => memo[key] || [],
  set: (key, val) => (memo[key] = val)
};
