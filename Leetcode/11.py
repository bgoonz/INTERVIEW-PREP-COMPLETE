class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        result = 0
        while l <= r:
            if height[l] <= height[r]:
                h = height[l]
                result = max(result, (r - l) * h)
                l += 1
            else:
                h = height[r]
                result = max(result, (r - l) * h)
                r -= 1
        return result


class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        if not height or len(height) < 2:
            return 0
        l, r = 0, len(height) - 1
        res = 0
        while l < r:
            h = min(height[l], height[r])
            res = max(res, (r - l) * h)
            while height[l] <= h and l < r:
                l += 1
            while height[r] <= h and l < r:
                r -= 1
        return res
