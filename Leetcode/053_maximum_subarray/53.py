class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        result, curr_sum = nums[0], nums[0]
        for num in nums[1:]:
            curr_sum = max(num, curr_sum + num)
            result = max(result, curr_sum)
        return result
