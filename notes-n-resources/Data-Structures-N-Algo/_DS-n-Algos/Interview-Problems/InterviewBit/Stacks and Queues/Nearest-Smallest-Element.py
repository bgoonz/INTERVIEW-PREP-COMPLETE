class Solution:
    # @param A : list of integers
    # @return a list of integers
    def prevSmaller(self, A):
        G = []
        stack = []
        for i in range(len(A)):
            while stack and stack[-1] >= A[i]:
                stack.pop()
            if not stack:
                G.append(-1)
            else:
                G.append(stack[-1])
            stack.append(A[i])
        return G
