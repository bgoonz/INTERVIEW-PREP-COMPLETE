# Time: O(n)


class Solution:
    def minSubArrayLen(self, s, nums):
        """
        :type s: int
        :type nums: List[int]
        :rtype: int
        """
        total = l = 0
        result = len(nums) + 1
        for r in range(len(nums)):
            total += nums[r]
            while total >= s:
                result = min(result, r - l + 1)
                total -= nums[l]
                l += 1
        return 0 if result == len(nums) + 1 else result
