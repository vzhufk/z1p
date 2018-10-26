const Loki = require("lokijs");
const LineByLine = require("line-by-line");
const file = new LineByLine("./assets/zipcodes.txt", {
  encoding: "utf8",
  skipEmptyLines: true
});

const db = new Loki("loki.json", { verbose: true, autoload: true });
const zips = db.addCollection("zips");
console.log(zips.data);

const tmp = [];
const MAX = 1000;

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
  if (tmp.length < MAX) {
    tmp.push({
      accuracy: accuracy,
      community: community,
      community_code: communityCode,
      country_code: countryCode,
      latitude: lat,
      longitude: lon,
      place: place,
      province: province,
      province_code: provinceCode,
      state: state,
      state_code: stateCode,
      zip_code: zip
    });
  } else {
    file.pause();
    try {
      zips.insert(tmp);
    } catch (e) {
      console.log(e);
    }
    file.resume();
    tmp.length = 0;
  }
};

file.on("line", stuff);

file.on("end", function() {
  zips.update();
});
