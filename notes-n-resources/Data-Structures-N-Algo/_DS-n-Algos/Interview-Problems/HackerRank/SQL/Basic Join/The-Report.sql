/*
Enter your query here.
*/
select
    if(Grades.Grade < 8, concat('NULL'), Students.Name),
    Grades.Grade,
    Students.Marks
from
    Grades join Students
on
    Students.Marks >= Grades.Min_Mark 
    and 
    Students.Marks <= Max_Mark
order by
    Grades.Grade desc,
    Students.Name asc,
    Students.Marks asc;