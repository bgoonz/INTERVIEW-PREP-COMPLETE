class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        ans = []
        for i in set(nums):
            if nums.count(i) == 1:
                ans.append(i)
                if len(ans) == 2:
                    return ans
        return ans
