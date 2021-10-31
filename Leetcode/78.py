# Bit manipulation
class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        for i in range(1 << len(nums)):
            tmp = []
            for j in range(len(nums)):
                if i >> j & 1:
                    tmp.append(nums[j])
            result.append(tmp)
        return result


# Backtrack
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        self.backtrack(result, 0, nums, [])
        return result

    def backtrack(self, result, idx, nums, path):
        result.append(path)
        for i in range(idx, len(nums)):
            self.backtrack(result, i + 1, nums, path + [nums[i]])
