import math


class Solution:
    def integerReplacement(self, n: int) -> int:
        s = 0
        while n != 1:
            if n % 2 == 0:
                n //= 2
                s += 1
                continue
            if n == 3:
                return s + 2
            else:
                if math.ceil(math.log2(n - 1)) == math.floor(math.log2(n - 1)):
                    n -= 1
                elif (math.ceil(math.log2(n + 1)) == math.floor(math.log2(n + 1))) or (
                    (n + 1) % 4 == 0
                ):
                    n += 1
                else:
                    n -= 1
                s += 1
        return s
