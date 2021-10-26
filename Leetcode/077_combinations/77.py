"""
O(n^min(k, n-k))
"""


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []
        self.dfs(list(range(1, n + 1)), k, [], result)
        return result

    def dfs(self, arr, k, path, result):
        if k < 0:
            return
        if k == 0:
            result.append(path)
        for i in range(len(arr)):
            self.dfs(arr[i + 1 :], k - 1, path + [arr[i]], result)
