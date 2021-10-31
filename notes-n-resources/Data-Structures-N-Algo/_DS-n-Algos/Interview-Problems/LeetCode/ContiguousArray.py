class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        dic = {0: -1}
        ps = 0
        max_length = 0
        for idx, number in enumerate(nums):
            if number:
                ps += 1
            else:
                ps -= 1
            if ps in dic:
                max_length = max(max_length, idx - dic[ps])
            else:
                dic[ps] = idx
        return max_length
