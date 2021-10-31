/*
Enter your query here.
*/
select ceil (
    avg(salary) - avg(replace(salary, '0', ''))
)
from employees;