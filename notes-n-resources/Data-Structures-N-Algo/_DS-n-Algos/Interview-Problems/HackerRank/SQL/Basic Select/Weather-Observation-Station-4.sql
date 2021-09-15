/*
Enter your query here.
*/
select count(city) - count(distinct city) from station;