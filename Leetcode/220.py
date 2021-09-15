class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        if t < 0:
            return False
        d = {}
        w = t + 1
        for i, num in enumerate(nums):
            key = num // w
            if key in d:
                return True
            if key + 1 in d and abs(num - d[key + 1]) < w:
                return True
            if key - 1 in d and abs(num - d[key - 1]) < w:
                return True
            d[key] = num
            if i >= k:
                del d[nums[i - k] // w]
        return False
