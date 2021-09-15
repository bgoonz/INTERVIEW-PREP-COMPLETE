class Solution:
    # @param A : tuple of integers
    # @param B : tuple of integers
    # @return a list of integers
    def intersect(self, A, B):
        s1 = 0
        s2 = 0
        e1 = len(A)
        e2 = len(B)
        intersection = []
        while s2 < e2 and s1 < e1:
            if A[s1] == B[s2]:
                intersection.append(A[s1])
                s1 += 1
                s2 += 1
            elif A[s1] < B[s2]:
                s1 += 1
            else:
                s2 += 1
        return intersection
