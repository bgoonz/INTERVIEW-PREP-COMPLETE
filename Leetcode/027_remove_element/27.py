class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if not nums:
            return 0
        idx = 0
        for n in nums:
            if n != val:
                nums[idx] = n
                idx += 1
        return idx
