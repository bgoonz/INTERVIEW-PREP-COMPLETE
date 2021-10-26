class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if len(nums) < 2:
            return True
        currentEnd, currentFarthest = 0, 0
        for i in range(len(nums) - 1):
            currentFarthest = max(i + nums[i], currentFarthest)
            if i == currentEnd:
                currentEnd = currentFarthest
            if currentEnd >= len(nums) - 1:
                return True
        return False
