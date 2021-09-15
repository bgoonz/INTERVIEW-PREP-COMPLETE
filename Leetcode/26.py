class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        idx = 0
        for n in nums[1:]:
            if n != nums[idx]:
                idx += 1
                nums[idx] = n
        return idx + 1
