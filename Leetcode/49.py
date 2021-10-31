from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        if not strs:
            return []
        d = defaultdict(list)
        for s in strs:
            d["".join(sorted(s))].append(s)
        return list(d.values())
