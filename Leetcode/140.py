# Time: O(N^3)


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        return self.dfs(s, set(wordDict), dict())

    def dfs(self, s, wordDict, cache):
        if s in cache:
            return cache[s]
        if len(s) == 0:
            return [""]
        result = []
        for i in range(1, len(s) + 1):
            word = s[:i]
            if word in wordDict:
                temp = self.dfs(s[i:], wordDict, cache)
                for ss in temp:
                    if not ss:
                        result.append(word)
                    else:
                        result.append(word + " " + ss)
        cache[s] = result
        return result
