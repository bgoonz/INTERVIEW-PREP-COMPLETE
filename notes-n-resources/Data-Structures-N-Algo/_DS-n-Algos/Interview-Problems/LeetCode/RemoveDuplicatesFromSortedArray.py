class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        p = 0
        while p < len(nums) - 1:
            if nums[p] == nums[p + 1]:
                nums.pop(p + 1)
                continue
            p += 1
        return len(nums)
