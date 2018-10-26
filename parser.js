const fs = require("fs");
const LineByLine = require("line-by-line");

fs.readdir("./assets", (err, files) => {
  files.forEach(file => {
    const filename = file.replace(".txt", "");
    fs.writeFile(`./assets2/${filename}.js`, "", () => {
      const text = new LineByLine(`./assets/${file}`, {
        encoding: "utf8",
        skipEmptyLines: true
      });

      let stuff = line => {
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

        const d = {
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
        };

        fs.appendFile(
          `./assets2/${filename}.js`,
          JSON.stringify(d, null, 4),
          function(err) {
            if (err) throw err;
            console.log("Updated!");
          }
        );
      };

      fs.appendFile(`./assets2/${filename}.js`, "module.exports = [", function(
        err
      ) {
        if (err) throw err;
        console.log("Updated!");
      });
      text.on("line", stuff);

      text.on("end", function() {
        fs.appendFile(`./assets2/${filename}.js`, "];", function(err) {
          if (err) throw err;
          console.log("Updated!");
        });
      });
    });
  });
});
