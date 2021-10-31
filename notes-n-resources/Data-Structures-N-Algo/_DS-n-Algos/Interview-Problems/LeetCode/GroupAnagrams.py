import collections


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        word = collections.defaultdict(list)
        for s in strs:
            word[tuple(sorted(s))].append(s)
        return word.values()
