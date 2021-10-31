/*
Enter your query here.
*/
set @counter := 0;

select 
    repeat('* ', @counter:=@counter+1)
from 
    information_schema.tables
limit 20;