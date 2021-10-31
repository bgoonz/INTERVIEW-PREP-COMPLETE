/*
Enter your query here.
*/
select concat(
    name, 
    '(', 
    substring(occupation, 1, 1), 
    ')'
)
from occupations
order by name;
select
    'There are a total of ',
    count(occupation),
    ' ',
    concat(lower(occupation), 's.')
from occupations
group by occupation
order by count(occupation), occupation;