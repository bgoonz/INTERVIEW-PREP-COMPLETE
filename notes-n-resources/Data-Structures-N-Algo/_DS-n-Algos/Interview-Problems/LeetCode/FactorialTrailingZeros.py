class Solution:
    def trailingZeroes(self, n: int) -> int:
        count = 0
        m = 5
        while n / m >= 1:
            count += int(n / m)
            m *= 5
        return count
