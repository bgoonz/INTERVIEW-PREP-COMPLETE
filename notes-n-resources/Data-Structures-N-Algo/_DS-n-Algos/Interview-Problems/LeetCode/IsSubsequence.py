class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True
        if len(t) == 0:
            return False
        sp = 0
        for tc in t:
            if s[sp] == tc:
                sp += 1
                if sp == len(s):
                    return True
        return False
