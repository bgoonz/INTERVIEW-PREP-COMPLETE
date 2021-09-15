class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g = sorted(g)
        s = sorted(s)
        content = 0
        while s and g:
            if s[-1] >= g[-1]:
                s.pop()
                content += 1
            g.pop()
        return content
