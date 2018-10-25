const Knex = require("knex");
const knexfile = require("./knexfile");
const knex = Knex(knexfile);
const LineByLine = require("line-by-line");
const file = new LineByLine("./assets/zipcodes.txt", {
  encoding: "utf8",
  skipEmptyLines: true
});

const tmp = [];
const MAX = 100;

let stuff = async line => {
  const data = line.split("\t");
  const [
    countryCode,
    zip,
    place,
    state,
    stateCode,
    province,
    provinceCode,
    community,
    communityCode,
    lat,
    lon,
    accuracy
  ] = data;
  if (tmp.length > MAX) {
    console.log(tmp);
    file.pause();
    await knex
      .insert(tmp)
      .into("zips")
      .then(r => console.log(r))
      .catch(e => {});
    file.resume();
    tmp.length = 0;
  }
  tmp.push({
    country_code: countryCode,
    zip_code: zip,
    place: place,
    state: state,
    state_code: stateCode,
    province: province,
    province_code: provinceCode,
    community: community,
    community_code: communityCode,
    latitude: lat,
    longitude: lon,
    accuracy: accuracy
  });
};

file.on("line", stuff);

file.on("end", function() {});
