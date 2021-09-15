class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        visited = set()
        n = len(matrix)
        for i in range(n):
            for j in range(n):
                if not visited or (i, j) not in visited:
                    matrix[i][j], matrix[j][n - i - 1] = (
                        matrix[j][n - i - 1],
                        matrix[i][j],
                    )
                    visited.add((i, j))
                    visited.add((j, n - i - 1))
