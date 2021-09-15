class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        x = len(nums)
        A = [0] * x
        for i in range(0, x):
            A[(i + k) % x] = nums[i]
        for i in range(0, x):
            nums[i] = A[i]
