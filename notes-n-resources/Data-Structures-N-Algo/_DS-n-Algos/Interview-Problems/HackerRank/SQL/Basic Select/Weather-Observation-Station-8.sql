/*
Enter your query here.
*/
select city 
from station
where city regexp '^[aeiou].*[aeiou]$';