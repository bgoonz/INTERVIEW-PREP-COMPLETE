class Solution:
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: bool
        """
        if not nums:
            return False
        l, r = 0, len(nums) - 1
        while l <= r:
            m = l + (r - l) // 2
            if nums[m] == target:
                return True
            if nums[r] > nums[m]:
                if nums[m] <= target <= nums[r]:
                    l = m + 1
                else:
                    r = m - 1
            elif nums[r] < nums[m]:
                if nums[l] <= target <= nums[m]:
                    r = m - 1
                else:
                    l = m + 1
            else:
                r -= 1
        return nums[l] == target
