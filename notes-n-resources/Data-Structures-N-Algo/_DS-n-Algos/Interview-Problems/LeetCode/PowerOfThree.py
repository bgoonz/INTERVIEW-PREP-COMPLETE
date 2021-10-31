class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1:
            return False
        if n == 1:
            return True
        if sum(list(map(int, str(n)))) % 3 != 0:
            return False
        else:
            while n > 1:
                if n % 3 == 0:
                    n /= 3
                else:
                    return False
        if n != 1:
            return False
        else:
            return True


# Alternate Approach
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1:
            return False
        else:
            return 1162261467 % n == 0
