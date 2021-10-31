"""
This first solution uses the interval splitting method
This is achieved by using a dp table.
Time Complexity: O(n^1.5)
"""


class Solution1:
    def numSquares(self, n) -> int:
        if n <= 3:
            return n
        dp = [0 for _ in range(n + 1)]
        dp[1], dp[2], dp[3] = 1, 2, 3
        for i in range(4, len(dp)):
            dp[i] = i
            j = 1
            while j * j <= i:
                dp[i] = min(dp[i], 1 + dp[i - j * j])
                j += 1
        return dp[-1]


"""
Lagrange's 4 square and 3 square theorem

Theorem: Every natural number can be represented as the sum of 4 integer squares.
N = a^2 + b^2 + c^2 + d^2

Theorem: A natural number can be represented as sum of 3 squares of integers.
N = a^2 + b^2 + c^2

if and only if the N is not of the form,

N = 4^a (8b + 7) -- (1)

LOGIC: 
- if N is a perfect square, return 1
- if N is of form (1),
    - keep dividing by 4
    - divide by 8
        - if rem == 7:
            return 4
- check if N can be split into two perfect squares. If yes, return 2
- if all fails, return 3
"""


class Solution:
    def numSquares(self, n: int) -> int:
        if ceil(sqrt(n)) == floor(sqrt(n)):
            return 1

        while n % 4 == 0:
            n /= 4
        if n % 8 == 7:
            return 4

        j = 1
        while j * j <= n:
            if ceil(sqrt(n - j * j)) == floor(sqrt(n - j * j)):
                return 2
            j += 1

        else:
            return 3
