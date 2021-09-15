class Solution:
    def maxArea(self, height: List[int]) -> int:
        i = 0
        j = len(height) - 1
        maxarea = 0
        while i != j:
            a = (j - i) * (min(height[i], height[j]))
            if a > maxarea:
                maxarea = a
            if height[i] > height[j]:
                j -= 1
            else:
                i += 1
        return maxarea
