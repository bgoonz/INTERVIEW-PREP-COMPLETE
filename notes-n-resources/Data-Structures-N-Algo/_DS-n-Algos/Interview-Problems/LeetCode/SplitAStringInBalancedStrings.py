class Solution:
    def balancedStringSplit(self, s: str) -> int:
        c = 0
        rc = 0
        lc = 0
        for i in range(len(s)):
            if s[i] == "R":
                rc += 1
            if s[i] == "L":
                lc += 1
            if rc == lc:
                c += 1
                rc = 0
                lc = 0
        return c
