class Solution:
    # @param A : string
    # @return an integer
    def braces(self, A):
        stack = []
        ops = set(["*", "+", "-", "/"])
        for i in A:
            if i == "(":
                stack.append("(")
                continue
            elif i == ")":
                if stack.pop() == "(":
                    return 1
                stack.pop()
                continue
            elif i in ops:
                stack.append(i)
        return 0
