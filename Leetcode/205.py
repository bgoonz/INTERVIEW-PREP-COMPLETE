class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        def convert(ss):
            d = {}
            return [d.setdefault(c, len(d)) for c in ss]

        return convert(s) == convert(t)
