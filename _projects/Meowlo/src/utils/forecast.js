const request = require("request");

const forecast = (latitude, longitude, darkskyKey) => {
  const url =
    "https://api.darksky.net/forecast/" +
    darkskyKey +
    "/" +
    latitude +
    "," +
    longitude +
    "?units=si";
  return new Promise((resolve, reject) => {
    request({ url: url, json: true }, (error, { body }) => {
      if (error) {
        reject("Unable to connect to the service!");
      } else if (body.error) {
        reject("Unable to find location, try another search");
      } else {
        resolve(
          `Weather summary: ${
            body.currently.summary
          }. The highest temperature today is ${
            body.daily.data[0].temperatureHigh
          } degrees. The lowest temperature today is ${
            body.daily.data[0].temperatureLow
          } degrees. UX index is ${
            body.daily.data[0].uvIndex
          }. It is currently ${
            body.currently.temperature
          } degrees out. There is ${
            body.currently.precipProbability * 100
          }% chance of rain. `
        );
      }
    });
  });
};

module.exports = forecast;
