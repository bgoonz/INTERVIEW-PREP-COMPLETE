# dp[i] represent the min cut for s[:i+1]
# so dp[len(s)-1] stores the result
# O(n^2)


class Solution:
    def minCut(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s or len(s) == 0:
            return 0
        n = len(s)
        dp = list(range(n))
        for mid in range(1, n):
            # odd length
            start, end = mid, mid
            while start >= 0 and end < n and s[start] == s[end]:
                newCut = 0 if start == 0 else dp[start - 1] + 1
                dp[end] = min(dp[end], newCut)
                start -= 1
                end += 1

            # even length
            start, end = mid - 1, mid
            while start >= 0 and end < n and s[start] == s[end]:
                newCut = 0 if start == 0 else dp[start - 1] + 1
                dp[end] = min(dp[end], newCut)
                start -= 1
                end += 1

        return dp[n - 1]
