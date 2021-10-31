class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return []
        m, n = len(matrix), len(matrix[0])
        rowMin, rowMax, colMin, colMax = 0, m - 1, 0, n - 1

        result = []
        while rowMin <= rowMax and colMin <= colMax:
            for j in range(colMin, colMax + 1):
                result.append(matrix[rowMin][j])
            rowMin += 1
            if rowMin > rowMax:
                break

            for i in range(rowMin, rowMax + 1):
                result.append(matrix[i][colMax])
            colMax -= 1
            if colMax < colMin:
                break

            for j in range(colMax, colMin - 1, -1):
                result.append(matrix[rowMax][j])
            rowMax -= 1
            if rowMax < rowMin:
                break

            for i in range(rowMax, rowMin - 1, -1):
                result.append(matrix[i][colMin])
            colMin += 1
            if colMin > colMax:
                break

        return result
