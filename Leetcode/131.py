# time: O(2^(n-1))
class Solution:
    def partition(self, s):
        """
        :type s: str
        :rtype: List[List[str]]
        """
        res = []
        self.dfs(res, [], s)
        return res

    def dfs(self, res, path, s):
        if not s:
            res.append(path[:])
            return
        for i in range(1, len(s) + 1):
            if s[:i] == s[i - 1 :: -1]:
                self.dfs(res, path + [s[:i]], s[i:])
