/*
Enter your query here.
*/
select
    w.id, p.age, w.coins_needed, w.power
from
    wands as w
    join 
    wands_property as p
        on w.code = p.code
where
    p.is_evil != '1' and
    w.coins_needed = 
    (
        select 
            min(coins_needed)
        from 
            wands as w1 
            join 
            wands_property as p1
        on
            w1.code = p1.code
        where 
            w1.power = w.power and
            p1.age = p.age 
    )
order by
    w.power desc,
    p.age desc;