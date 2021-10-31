class Solution:
    def myAtoi(self, str: str) -> int:
        if len(str) == 0:
            return 0
        str = list(str.strip())
        if len(str) == 0:
            return 0
        if str[0] == "-":
            s = -1
        else:
            s = 1
        if str[0] in ["-", "+"]:
            del str[0]
        i = 0
        exp = 0
        while i < len(str) and str[i].isdigit():
            exp = exp * 10 + ord(str[i]) - ord("0")
            i += 1
        return max(-2 ** 31, min(exp * s, 2 ** 31 - 1))
