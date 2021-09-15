class Solution:
    def checkValidString(self, s: str) -> bool:
        lb = 0
        rb = 0
        for i in s:
            if i == "(" or i == "*":
                lb += 1
            else:
                lb -= 1
            if lb < 0:
                return False
        if lb == 0:
            return True

        for i in range(len(s) - 1, -1, -1):
            if s[i] == ")" or s[i] == "*":
                rb += 1
            else:
                rb -= 1
            if rb < 0:
                return False
        return True
