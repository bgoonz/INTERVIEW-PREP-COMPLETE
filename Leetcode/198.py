class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        s1, s2 = 0, 0
        for num in nums:
            s1, s2 = s2, max(s1 + num, s2)
        return s2
