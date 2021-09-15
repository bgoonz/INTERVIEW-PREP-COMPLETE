/*
Enter your query here.
*/
select distinct city
from station
where city regexp '^[^aeiou]';