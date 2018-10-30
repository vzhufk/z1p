## Zip Codes validation and Parse :mailbox_with_mail:

Module that can be used for search places via zip code and other geolocation properties.

:clock10: _Note:_ Provide exact country codes to prevent slow performance and out of memory error.

:package: _Note:_ Package is **~140Mb.**

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

## Countries

### [Available countries](https://github.com/vzhufk/z1p/tree/master/assets) in `*.js` files.

## TODO:

1. Add memorization.
2. Add wrappers to raw.
3. Improve performance.

### GeoData provided by **[geonames.org](http://www.geonames.org/)**
