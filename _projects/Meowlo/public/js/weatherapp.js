const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weatherSearchTitle = document.getElementById("weather-search-title");
const weatherSearchResults = document.getElementById("weather-search-results");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  weatherSearchTitle.textContent = "Loading...";
  weatherSearchResults.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherSearchTitle.textContent = data.error;
      } else {
        weatherSearchTitle.textContent = `Your location is ${data.location}.`;
        weatherSearchResults.textContent = data.forecast;
      }
    });
  });
});
