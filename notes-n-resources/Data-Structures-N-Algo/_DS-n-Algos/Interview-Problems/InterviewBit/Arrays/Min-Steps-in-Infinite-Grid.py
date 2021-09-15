class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return an integer
    def coverPoints(self, A, B):
        moves = 0
        for i in range(len(A) - 1):
            if abs(A[i] - A[i + 1]) <= abs(B[i] - B[i + 1]):
                moves += abs(B[i] - B[i + 1])
            else:
                moves += abs(A[i] - A[i + 1])
        return moves
