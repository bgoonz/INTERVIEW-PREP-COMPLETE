class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 1:
            return n
        s1 = 1
        s2 = 2
        for i in range(2, n):
            s = s1 + s2
            s1, s2 = s2, s
        return s2
