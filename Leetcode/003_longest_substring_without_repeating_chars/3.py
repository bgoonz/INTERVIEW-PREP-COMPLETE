# Time: O(n)


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, d = 0, {}
        result = 0
        for i, val in enumerate(s):
            if val in d and d[val] >= start:
                start = d[val] + 1
            d[val] = i
            result = max(result, i - start + 1)
        return result
