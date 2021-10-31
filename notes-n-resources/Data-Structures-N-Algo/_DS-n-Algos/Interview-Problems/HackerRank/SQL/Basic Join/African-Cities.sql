select city.name
from city join country
where city.countrycode = country.code and country.continent = 'Africa';