const request = require("request");

const geocode = (address, mapboxKey) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    mapboxKey +
    "&limit=1";
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        reject("Unable to connect to the location services!");
      } else if (body.features == null || body.features.length === 0) {
        reject("Unable to find location, try another search.");
      } else {
        resolve({
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
        });
      }
    });
  });
};

module.exports = geocode;
