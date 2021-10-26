class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        # O(log_n)
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        rev = 0
        while x > rev:
            rev = rev * 10 + x % 10
            x = x // 10
        return rev // 10 == x or rev == x
        # # O(n)
        # if x < 0 or (x != 0 and x % 10 == 0): return False
        # x = str(x)
        # l, r = 0, len(x)-1
        # while l < r:
        #     if x[l] != x[r]:
        #         return False
        #     l += 1
        #     r -= 1
        # return True
