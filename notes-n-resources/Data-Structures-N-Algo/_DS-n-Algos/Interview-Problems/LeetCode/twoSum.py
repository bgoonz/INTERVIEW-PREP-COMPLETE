# Solution for https://leetcode.com/problems/two-sum/
# Language : Python3

# O(n^2) Solution
class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return i, j


# O(n) Solution
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {v: k for k, v in enumerate(nums)}
        for i in range(len(nums)):
            if target - nums[i] in dict and nums.index(target - nums[i]) != i:
                return i, nums.index(target - nums[i])
