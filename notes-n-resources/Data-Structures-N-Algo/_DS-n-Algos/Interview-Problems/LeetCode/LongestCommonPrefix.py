class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        x = 0
        for i in zip(*strs):
            r = all(a == i[0] for a in i)
            if r:
                x += 1
            else:
                break
        return strs[0][0:x] if x else ""
