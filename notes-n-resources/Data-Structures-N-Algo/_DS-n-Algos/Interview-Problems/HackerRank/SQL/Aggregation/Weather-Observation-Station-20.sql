/*
Enter your query here.
*/
set @rowNum = -1;

select
    round(avg(lat_n), 4)
from
    (
        select 
            lat_n,
            (@rowNum:=@rowNum+1) as rowNum
        from
            station
        order by lat_n asc
    )
    as temp
where
    temp.rowNum in (floor(@rowNum/2), ceil(@rowNum/2))