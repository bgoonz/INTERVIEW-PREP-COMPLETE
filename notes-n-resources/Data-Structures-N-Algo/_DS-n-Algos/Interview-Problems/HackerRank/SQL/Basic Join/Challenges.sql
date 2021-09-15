/*
Enter your query here.
*/
select 
    c.hacker_id, h.name, count(c.hacker_id) as ccount
from
    hackers as h join challenges as c
        on h.hacker_id = c.hacker_id
group by 
    c.hacker_id, h.name
having 
    ccount = (
        select
            max(c1.cnt)
        from 
        (
            select 
                count(hacker_id) as cnt
            from 
                challenges
            group by
                hacker_id
            order by
                hacker_id
        ) c1
    )
    or
    ccount in
    (
        select 
            c2.cnt
        from
            (
                select count(*) as cnt
                from challenges
                group by hacker_id
            ) c2
        group by
            c2.cnt
        having 
            count(c2.cnt) = 1
    )    
order by
    count(c.challenge_id) desc,
    c.hacker_id asc;