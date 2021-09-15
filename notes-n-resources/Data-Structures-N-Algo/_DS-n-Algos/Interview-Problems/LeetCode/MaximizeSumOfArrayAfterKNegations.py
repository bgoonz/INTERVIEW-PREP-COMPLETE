class Solution:
    def largestSumAfterKNegations(self, A: List[int], K: int) -> int:
        A = sorted(A)
        for i in range(len(A)):
            if A[i] < 0:
                A[i] = -A[i]
                K -= 1
            elif A[i] >= 0:
                if K % 2 == 0:
                    break
                else:
                    A[A.index(min(A))] = -A[A.index(min(A))]
                    break
            if K == 0:
                break
        return sum(A)
