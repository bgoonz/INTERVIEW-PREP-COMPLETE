/*
Enter your query here.
*/
select min(round(lat_n, 4))
from station
where lat_n > 38.7780;