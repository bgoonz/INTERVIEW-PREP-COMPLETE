from collections import Counter


class Solution:
    def isOneEditDistance(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) > len(t):
            return self.isOneEditDistance(t, s)
        m, n = len(s), len(t)
        if n - m > 1 or s == t:
            return False
        for i in range(m):
            if s[i] != t[i]:
                return s[i + 1 :] == t[i + 1 :] or s[i:] == t[i + 1 :]
        return True
