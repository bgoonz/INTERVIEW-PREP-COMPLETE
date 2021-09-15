class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        sign = (dividend > 0) == (divisor > 0)
        dividend, divisor = abs(dividend), abs(divisor)
        result = 0
        while dividend >= divisor:
            temp = 0
            while dividend >= (divisor << temp + 1):
                temp += 1
            result += 1 << temp
            dividend -= divisor << temp
        return min(result, 2147483647) if sign else -result
