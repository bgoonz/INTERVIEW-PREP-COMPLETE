from collections import Counter


class Solution:
    def count(self, d1, d2):
        s = 0
        for i in "abcdefghijklmnopqrstuvwxyz":
            s += d1[i] - d2[i]
            if s < 0:
                return False
        return True

    def checkIfCanBreak(self, s1: str, s2: str) -> bool:
        d1 = Counter(s1)
        d2 = Counter(s2)
        return self.count(d1, d2) | self.count(d2, d1)
