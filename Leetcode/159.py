# Time: O(n)
# Space: O(1)
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        d = {}
        count = 0
        start, end = 0, 0
        result = 0
        while end < len(s):
            c = s[end]
            d[c] = d.get(c, 0) + 1
            if d[c] == 1:
                count += 1
            end += 1
            while count > 2 and start < len(s):
                curr = s[start]
                if curr in d:
                    d[curr] -= 1
                    if d[curr] == 0:
                        count -= 1
                start += 1
            result = max(result, end - start)
        return result
