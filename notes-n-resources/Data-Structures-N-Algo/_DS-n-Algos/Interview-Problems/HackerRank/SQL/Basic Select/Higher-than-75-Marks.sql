/*
Enter your query here.
*/
select students.name
from students
where students.marks > 75
order by RIGHT(students.name, 3), students.id;
