class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        t = nums.count(0)
        nzpos = 0
        if t == 0:
            return nums
        for i in range(0, len(nums)):
            if nums[i] != 0:
                nums[nzpos] = nums[i]
                nzpos = nzpos + 1
        for i in range(len(nums) - t, len(nums)):
            nums[i] = 0
