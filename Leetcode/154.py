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
            elif nums[r] > nums[m]:
                r = m
            else:
                r -= 1
        return nums[l]
