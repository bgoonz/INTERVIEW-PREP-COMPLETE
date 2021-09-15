class Solution:
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        result = big = small = nums[0]
        for num in nums[1:]:
            big, small = (
                max(num, big * num, small * num),
                min(num, big * num, small * num),
            )
            result = max(result, big)
        return result
