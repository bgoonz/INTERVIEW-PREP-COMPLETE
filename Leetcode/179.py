from functools import cmp_to_key


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums = list(map(str, nums))
        comp = lambda x, y: -1 if x + y > y + x else 1 if x + y < y + x else 0
        return str(int("".join(sorted(nums, key=cmp_to_key(comp)))))
