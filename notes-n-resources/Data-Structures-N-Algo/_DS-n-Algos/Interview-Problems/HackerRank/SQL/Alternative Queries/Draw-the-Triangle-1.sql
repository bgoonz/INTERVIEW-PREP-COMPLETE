/*
Enter your query here.
*/
set @counter := 21;

select 
    repeat('* ', @counter:=@counter-1)
from 
    information_schema.tables;