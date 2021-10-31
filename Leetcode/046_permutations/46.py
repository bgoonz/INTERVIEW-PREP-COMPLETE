"""
Time complexity: O(N*N!)
"""


class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        ret = []
        self.dfs(nums, ret, [])
        return ret

    def dfs(self, nums, ret, permutation):
        if not nums:
            ret.append(permutation)
        for i in range(len(nums)):
            self.dfs(nums[:i] + nums[i + 1 :], ret, permutation + [nums[i]])
