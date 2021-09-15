"""
time: O(n)
space: O(n)
"""


class Solution:
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s or len(s) == 0:
            return 0
        stack, result = [], 0
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            else:
                if stack:
                    if s[stack[-1]] == "(":
                        stack.pop()
                    else:
                        stack.append(i)
                else:
                    stack.append(i)
        if not stack:
            return len(s)
        else:
            r = len(s)
            while stack:
                l = stack.pop()
                result = max(result, r - l - 1)
                r = l
            result = max(result, r)
            return result
