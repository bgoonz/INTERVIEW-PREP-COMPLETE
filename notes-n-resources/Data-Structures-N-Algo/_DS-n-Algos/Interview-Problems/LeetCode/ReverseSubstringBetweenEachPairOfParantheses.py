class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        s = list(s)
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
                continue
            if s[i] == ")":
                idx = stack.pop()
                s[idx + 1 : i] = s[idx + 1 : i][::-1]
        ans = ""
        for i in s:
            if i == "(" or i == ")":
                continue
            ans += i
        return ans
