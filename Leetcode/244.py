from collections import defaultdict

# Time: O(m+n)
class WordDistance:
    def __init__(self, words: List[str]):
        self.d = defaultdict(list)
        for i, word in enumerate(words):
            self.d[word].append(i)

    def shortest(self, word1: str, word2: str) -> int:
        loc1 = self.d[word1]
        loc2 = self.d[word2]
        result = float("inf")
        i, j = 0, 0
        while i < len(loc1) and j < len(loc2):
            result = min(result, abs(loc2[j] - loc1[i]))
            if loc1[i] < loc2[j]:
                i += 1
            else:
                j += 1
        return result
