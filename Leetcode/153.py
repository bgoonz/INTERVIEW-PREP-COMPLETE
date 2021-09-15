class Solution:
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return -1
        l, r = 0, len(nums) - 1
        while l < r:
            m = l + (r - l) // 2
            if nums[r] < nums[m]:
                l = m + 1
            else:
                r = m
        return nums[l]
