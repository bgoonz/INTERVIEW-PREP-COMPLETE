from typing import List


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or len(matrix[0]) == 0:
            return 0
        result, n = 0, len(matrix[0])
        heights = [0] * (n + 1)
        for row in matrix:
            for i in range(n):
                heights[i] = heights[i] + 1 if row[i] == "1" else 0
            stack = [-1]
            for i in range(len(heights)):
                while heights[i] < heights[stack[-1]]:
                    h = heights[stack.pop()]
                    result = max(result, h * (i - 1 - stack[-1]))
                stack.append(i)
        return result
