class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        if len(nums) == 1:
            return 1
        idx = 1
        for n in nums[2:]:
            if n > nums[idx - 1]:
                idx += 1
                nums[idx] = n
        return idx + 1
