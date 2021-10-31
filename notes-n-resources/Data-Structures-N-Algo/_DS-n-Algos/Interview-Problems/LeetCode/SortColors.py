from collections import Counter


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = Counter(nums)
        nums.clear()
        for v in range(3):
            for i in range(n[v]):
                nums.append(v)
