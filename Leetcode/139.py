class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordDict = set(wordDict)
        return self.dfs(s, wordDict, {})

    def dfs(self, s, wordDict, cache):
        if s in cache:
            return cache[s]
        if s in wordDict:
            return True
        for i in range(1, len(s)):
            if s[:i] in wordDict and self.dfs(s[i:], wordDict, cache):
                cache[s] = True
                return True

        cache[s] = False
        return False


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordDict = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for j in range(1, len(s) + 1):
            for i in range(j):
                word = s[i:j]
                if word in wordDict and dp[i]:
                    dp[j] = True
                    break
        return dp[len(s)]
