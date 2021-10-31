/*
Enter your query here.
*/
select (
    case
        when A+B > C AND B+C > A AND C+A > B then 
            case 
                when A = B AND B = C then "Equilateral"
                when A = B or B = C or C = A then "Isosceles"
                else "Scalene"
            end
        else "Not A Triangle"
    end
) 
from triangles;