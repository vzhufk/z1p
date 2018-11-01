const fs = require("fs");

const iso = require("iso-country-codes");

const CODES = fs.readdirSync("./assets");

CODES.forEach(code => {
  const name = iso.byAlpha2[code].name;
  const alpha2 = code;
  const alpha3 = iso.byAlpha2[code].alpha3;
  const numeric = iso.byAlpha2[code].numeric;
  const TEXT = `
## Geodata of ${name} for z1p module. :mailbox_with_mail:

\`\`\`
  name: ${name}
  alpha2: ${alpha2}
  alpha3: ${alpha3}
  numeric: ${numeric}
\`\`\`

## Install

\`\`\`
npm install @z1p/${code.toLowerCase()}
\`\`\`

## Usage

Created to be used by this module [z1p](https://github.com/vzhufk/z1p).
But you can use this data whatever you need.

Data is a bit compresed. You can map it like this: [map.js](https://github.com/vzhufk/z1p/blob/master/src/map.js).

### GeoData provided by **[geonames.org](http://www.geonames.org/)**
`;

  fs.writeFileSync(`./assets/${code}/README.md`, TEXT);
});
