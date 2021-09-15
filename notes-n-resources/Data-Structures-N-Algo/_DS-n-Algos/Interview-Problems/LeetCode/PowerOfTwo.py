# Classic Solution
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n == 1:
            return True
        if n == 0:
            return False
        while n % 2 == 0:
            n = n / 2
        if n == 1:
            return True
        else:
            return False


# Solution Using Bit Manipulation
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and bin(n).count("1") == 1
