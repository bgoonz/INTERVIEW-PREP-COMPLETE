"""
Time: O(mn)
Space: O(m or n)
"""


class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        prev = [0]
        m, n = len(word2), len(word1)
        for i in range(n):
            prev.append(prev[i] + 1)

        for i in range(m):
            curr = [i + 1]
            for j in range(n):
                tmp = prev[j] if word1[j] == word2[i] else prev[j] + 1
                curr.append(min(curr[j] + 1, prev[j + 1] + 1, tmp))
            prev = curr
        return prev[n]
