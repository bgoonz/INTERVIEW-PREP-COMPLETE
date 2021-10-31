class Solution:
    # @param A : tuple of integers
    # @return a strings
    def largestNumber(self, A):
        A = [str(item) for item in A]
        A = sorted(A, key=lambda s: s * 9)[::-1]
        return str(int("".join(A)))
