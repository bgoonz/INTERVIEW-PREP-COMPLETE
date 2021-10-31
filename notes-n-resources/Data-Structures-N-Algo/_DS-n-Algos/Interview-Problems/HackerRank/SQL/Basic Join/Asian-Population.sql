select sum(city.population)
from city join country
where city.countrycode = country.code and country.continent = 'Asia';