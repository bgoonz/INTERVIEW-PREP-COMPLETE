class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        result = float("inf")
        for i in range(len(nums) - 2):
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s == target:
                    return target
                if abs(s - target) < abs(result - target):
                    result = s
                if s > target:
                    r -= 1
                else:
                    l += 1
        return result
