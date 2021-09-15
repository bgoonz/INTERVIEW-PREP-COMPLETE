class Solution:
    # @param A : string
    # @return a strings
    def simplifyPath(self, A):
        A = A.split("/")
        op = ""
        stack = []
        for i in range(len(A)):
            if A[i].isalpha():
                stack.append(A[i])
                continue
            if A[i] == ".":
                continue
            if A[i] == "..":
                if stack:
                    stack.pop()
        for i in range(len(stack)):
            op += "/" + stack[i]
        return op if op else "/"
