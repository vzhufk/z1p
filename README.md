# z1p

## Zip Codes validation and Parse

Module that can be used for search places via zip code and etc.

_Note:_ Provide exact country codes to prevent slow performance and out of memory. 🙂

## Usage

```js
const z1p = require("z1p");

// Get places by zip code.
z1p(["US"]).raw(v => v.zip_code == "59330");
/*
[ { accuracy: '1',
    community: null,
    community_code: null,
    country_code: 'US',
    latitude: '47.1008',
    longitude: '-104.7287',
    place: 'Glendive',
    province: 'Dawson',
    province_code: '021',
    state: 'Montana',
    state_code: 'MT',
    zip_code: '59330' } ]
*/
```

## API

### z1p(codes, options)

- `codes` `{Array of Strings}` Country codes to search in. By default equals to all available.
- `options` `{Object}`
  - `memorize` `{Boolean}` !WIP

### .raw(compare)

- `compare` `{Function}` function to find.  
  **returns**: {Array of Places}

Place object looks like this:

```js
{
  accuracy: '1', // Accuracy of place
  community: 'community', // Community name
  community_code: 'community_code', // Community code
  country_code: 'country_code', // Country code
  latitude: '1', // Latitude
  longitude: '-1', // Longitude
  place: 'place', // Place
  province: 'province', // Province
  province_code: '021', // Province code
  state: 'state', // State
  state_code: 'state_code', // State code
  zip_code: '1' // Zip code
}
```

**Example:**

```js
  { accuracy: '1',
    community: null,
    community_code: null,
    country_code: 'US',
    latitude: '47.1008',
    longitude: '-104.7287',
    place: 'Glendive',
    province: 'Dawson',
    province_code: '021',
    state: 'Montana',
    state_code: 'MT',
    zip_code: '59330' }
```

```js
[
  "AD",
  "AR",
  "AS",
  "AT",
  "AU",
  "AX",
  "BD",
  "BE",
  "BG",
  "BM",
  "BR",
  "BY",
  "CA",
  "CH",
  "CL",
  "CO",
  "CR",
  "CZ",
  "DE",
  "DK",
  "DO",
  "DZ",
  "ES",
  "FI",
  "FM",
  "FO",
  "FR",
  "GB",
  "GF",
  "GG",
  "GL",
  "GP",
  "GT",
  "GU",
  "HR",
  "HU",
  "IE",
  "IM",
  "IN",
  "IS",
  "IT",
  "JE",
  "JP",
  "LI",
  "LK",
  "LT",
  "LU",
  "LV",
  "MC",
  "MD",
  "MH",
  "MK",
  "MP",
  "MQ",
  "MT",
  "MX",
  "MY",
  "NC",
  "NL",
  "NO",
  "NZ",
  "PH",
  "PK",
  "PL",
  "PM",
  "PR",
  "PT",
  "PW",
  "RE",
  "RO",
  "RU",
  "SE",
  "SI",
  "SJ",
  "SK",
  "SM",
  "TH",
  "TR",
  "UA",
  "US",
  "UY",
  "VA",
  "VI",
  "WF",
  "YT",
  "ZA"
];
```

## TODO:

1. Add memorization.
2. Add wrappers to raw.
3. Improve performance.

ZIP Codes data from http://www.geonames.org/
