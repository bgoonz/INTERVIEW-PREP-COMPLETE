class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for x in zip(*matrix):
            matrix.pop(0)
            matrix.append(x[::-1])
