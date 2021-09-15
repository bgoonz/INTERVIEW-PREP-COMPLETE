class Solution:
    # @param A : list of integers
    # @param B : list of integers
    def merge(self, A, B):
        e2 = len(B)
        s1 = 0
        s2 = 0
        while s2 < e2 and s1 < len(A):
            if B[s2] <= A[s1]:
                A.insert(s1, B[s2])
                s2 += 1
            else:
                s1 += 1
        while s2 < e2:
            A.append(B[s2])
            s2 += 1
