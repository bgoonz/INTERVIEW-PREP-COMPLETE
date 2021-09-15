class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return int(((sum(set(nums)) * 3) - sum(nums)) / 2)
