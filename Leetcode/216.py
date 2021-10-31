class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        result = []
        self.dfs(list(range(1, 10)), k, n, [], result)
        return result

    def dfs(self, arr, k, n, path, result):
        if k < 0 or n < 0:
            return
        if k == 0 and n == 0:
            result.append(path)
        for i in range(len(arr)):
            self.dfs(arr[i + 1 :], k - 1, n - arr[i], path + [arr[i]], result)
