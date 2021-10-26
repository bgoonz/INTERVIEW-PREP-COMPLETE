class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights += [0]
        stack = [-1]
        result = 0
        for i in range(len(heights)):
            while heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
                result = max(result, h * (i - stack[-1] - 1))
            stack.append(i)
        return result
