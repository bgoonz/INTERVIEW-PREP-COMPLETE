# O(n log n) Solution
class Solution1:
    # @param A : list of integers
    # @return a list of integers
    def wave(self, A):
        A.sort()
        for i in range(0, len(A) - 1, 2):
            A[i], A[i + 1] = A[i + 1], A[i]
        return A


# O(n) Solution
class Solution2:
    # @param A : list of integers
    # @return a list of integers
    def wave(self, A):
        n = len(A)
        for i in range(0, n, 2):
            if (i > 0) and A[i] < A[i - 1]:
                A[i], A[i - 1] = A[i - 1], A[i]
            if i < (n - 1) and A[i] < A[i + 1]:
                A[i], A[i + 1] = A[i + 1], A[i]
        return A
