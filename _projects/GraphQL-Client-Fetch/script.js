const continentSelect = document.getElementById("continent-select");
const countryList = document.getElementById("countries-list");

queryFetch(`
  query {
    continents {
      name
      code
    }
  }
`).then((data) => {
  data.data.continents.forEach((continent) => {
    const option = document.createElement("option");
    option.value = continent.code;
    option.innerText = continent.name;
    continentSelect.append(option);
  });
});

continentSelect.addEventListener("change", async (e) => {
  const continentCode = e.target.value;
  const countries = await getContinentCountries(continentCode);
  countryList.innerHTML = "";
  countries.forEach((country) => {
    const element = document.createElement("div");
    element.innerText = country.name;
    countryList.append(element);
  });
});

function getContinentCountries(continentCode) {
  return queryFetch(
    `
    query getCountries($code: String) {
      continent(code: $code) {
        countries {
          name
        }
      }
    }
  `,
    { code: continentCode }
  ).then((data) => {
    return data.data.continent.countries;
  });
}

function queryFetch(query, variables) {
  return fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).then((res) => res.json());
}
