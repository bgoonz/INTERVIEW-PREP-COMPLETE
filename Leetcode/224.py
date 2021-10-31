class Solution(object):
    def calculate(self, s):
        """
        :type s: str
        :rtype: int
        """
        curr, total, sign, i = 0, 0, 1, 0
        stack = []
        while i < len(s):
            if s[i].isdigit():
                while i < len(s) and s[i].isdigit():
                    curr = curr * 10 + int(s[i])
                    i += 1
                total += sign * curr
                if i >= len(s):
                    break
            if s[i] == "+":
                sign = 1
                curr = 0
            if s[i] == "-":
                sign = -1
                curr = 0
            if s[i] == "(":
                stack.append(total)
                stack.append(sign)
                curr = 0
                total = 0
                sign = 1
            if s[i] == ")":
                total *= stack.pop()
                total += stack.pop()
                curr = 0
                sign = 1
            i += 1
        return total
