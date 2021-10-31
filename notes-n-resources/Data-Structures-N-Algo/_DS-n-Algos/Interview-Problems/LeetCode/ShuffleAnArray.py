class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums
        shuf = self.nums.copy()
        self.shuf = shuf

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        self.shuf = self.nums.copy()
        return self.shuf

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        x = len(self.nums)
        for i in range(x):
            j = random.randrange(i, x)
            self.shuf[i], self.shuf[j] = self.shuf[j], self.shuf[i]
        return self.shuf


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
