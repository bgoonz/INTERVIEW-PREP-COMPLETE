class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        if not nums:
            return
        n = len(nums)
        k = k % n
        nums[:] = nums[-k:] + nums[:-k]
        # nums[:] = nums[n-k:] + nums[:n-k]
