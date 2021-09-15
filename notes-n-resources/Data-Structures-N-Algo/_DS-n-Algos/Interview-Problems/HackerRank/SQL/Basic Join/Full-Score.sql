/*
Enter your query here.
*/
select 
    hackers.hacker_id, hackers.name
from
    submissions join challenges
        on submissions.challenge_id = challenges.challenge_id 
    join difficulty
        on challenges.difficulty_level = difficulty.difficulty_level
    join hackers
        on submissions.hacker_id = hackers.hacker_id 
where
    submissions.score = difficulty.score
group by
    hackers.hacker_id,
    hackers.name
having
    count(submissions.hacker_id) > 1
order by
    count(submissions.hacker_id) desc,
    hackers.hacker_id asc;