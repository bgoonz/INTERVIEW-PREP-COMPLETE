class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        maps = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        result = 0
        for i in range(len(s)):
            if i >= 1 and maps[s[i - 1]] < maps[s[i]]:
                result += maps[s[i]] - 2 * maps[s[i - 1]]
            else:
                result += maps[s[i]]
        return result
