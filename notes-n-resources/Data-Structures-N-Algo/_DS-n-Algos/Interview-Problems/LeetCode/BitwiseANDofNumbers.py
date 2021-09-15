import math


class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        ans = m
        if not m == 0:
            x = math.log2(m)
            x = int(x) + 1
            x = 2 ** x
        else:
            return 0
        if n >= x:
            return 0
        for i in range(m + 1, n + 1):
            ans = ans & i
        return ans
