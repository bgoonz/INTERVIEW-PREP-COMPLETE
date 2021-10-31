class Solution:
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        result, start = "", ord("A")
        while n > 0:
            result, n = chr((n - 1) % 26 + start) + result, (n - 1) // 26
        return result
