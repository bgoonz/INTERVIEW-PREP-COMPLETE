from collections import Counter


class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        stack = []
        c = Counter(A)
        for i in A:
            if i == "(":
                stack.append("(")
                continue
            if i == ")":
                if stack:
                    stack.pop()
        if not stack and c["("] == c[")"]:
            return 1
        else:
            return 0
