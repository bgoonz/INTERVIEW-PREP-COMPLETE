# time: log(n)
# space: log(n)


class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n < 0:
            if n == -2147483648:
                n += 2
            n = -n
            x = 1 / x
        return (
            self.myPow(x * x, n // 2) if n % 2 == 0 else x * self.myPow(x * x, n // 2)
        )
