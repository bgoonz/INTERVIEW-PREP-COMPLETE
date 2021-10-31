class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 2:
            return 0
        prime = [True] * n
        prime[:2] = [False, False]
        for i in range(2, int((n - 1) ** 0.5) + 1):
            if prime[i]:
                prime[i ** 2 :: i] = [False] * len(prime[i ** 2 :: i])
        return sum(prime)
