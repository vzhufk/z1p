const MAP = {
  accuracy: 0,
  community: 1,
  community_code: 2,
  country_code: 3,
  latitude: 4,
  longitude: 5,
  place: 6,
  province: 7,
  province_code: 8,
  state: 9,
  state_code: 10,
  zip_code: 11
};

module.exports = array => {
  const result = {};

  for (const key in MAP) {
    result[key] = array[MAP[key]];
  }

  return result;
};
