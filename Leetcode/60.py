import math


class Solution:
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        nums = list(range(1, n + 1))
        NN = math.factorial(n)
        k -= 1
        res = ""
        while len(nums) > 0:
            NN = int(NN / len(nums))
            idx, k = divmod(k, NN)
            res += str(nums.pop(idx))
        return res
