from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        d = Counter(t)
        start, end = 0, 0
        result = ""
        count = len(d)
        while end < len(s):
            c = s[end]
            if c in d:
                d[c] -= 1
                if d[c] == 0:
                    count -= 1
            end += 1
            while count == 0 and start < len(s):
                if result == "":
                    result = s[start:end]
                else:
                    if len(s[start:end]) < len(result):
                        result = s[start:end]
                curr = s[start]
                if curr in d:
                    d[curr] += 1
                    if d[curr] > 0:
                        count += 1
                start += 1
        return result
