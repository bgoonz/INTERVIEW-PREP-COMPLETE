class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums = sorted(nums)[::-1]
        x = sum(nums)
        s = 0
        if len(nums) == 1:
            return nums
        for i in range(len(nums) + 1):
            s += nums[i]
            if s > x - s:
                return nums[0 : i + 1]
