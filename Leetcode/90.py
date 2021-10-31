class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        result = []
        self.backtrack(sorted(nums), [], result)
        return result

    def backtrack(self, nums, path, result):
        result.append(path)
        if not nums:
            return
        for i in range(len(nums)):
            if i > 0 and nums[i - 1] == nums[i]:
                continue
            self.backtrack(nums[i + 1 :], path + [nums[i]], result)
