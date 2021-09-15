# Time: logN
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if not nums or target < nums[0]:
            return 0
        if nums[-1] < target:
            return len(nums)
        l, r = 0, len(nums) - 1
        while l <= r:
            m = l + (r - l) // 2
            if nums[m] == target:
                return m
            if nums[m] > target:
                r = m - 1
            else:
                l = m + 1
        return l
