class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = l + (r - l) // 2
            high_mid = mid + 1
            if nums[mid] < nums[high_mid]:
                l = high_mid
            else:
                r = mid
        return l
