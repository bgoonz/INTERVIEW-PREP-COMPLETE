class Solution:
    def isMonotonic(self, A: List[int]) -> bool:
        inc = True
        dec = True
        for i in range(0, len(A) - 1):
            if A[i] > A[i + 1]:
                inc = False
            if A[i] < A[i + 1]:
                dec = False
        return inc or dec
