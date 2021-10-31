/*
Enter your query here.
*/
select (salary * months) as e, count(*)
from employee
group by 1
order by e desc
limit 1;