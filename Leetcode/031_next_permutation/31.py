class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = n - 1
        while i > 0:
            if nums[i - 1] < nums[i]:
                break
            i -= 1
        if i == 0:
            self.reverse(0, n - 1, nums)
        else:
            j = n - 1
            target = nums[i - 1]
            while j > i - 1:
                if nums[j] > target:
                    break
                j -= 1
            nums[i - 1], nums[j] = nums[j], nums[i - 1]
            self.reverse(i, n - 1, nums)

    def reverse(self, l, r, nums):
        if r < l:
            return
        nums[l], nums[r] = nums[r], nums[l]
        self.reverse(l + 1, r - 1, nums)
