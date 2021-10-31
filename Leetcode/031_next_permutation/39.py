# Time Complexity: O(N^target)
# Space Complexity:


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        candidates.sort()
        self.search(candidates, target, [], result)
        return result

    def search(self, candidates, target, path, result):
        if target == 0:
            result.append(list(path))
            return
        for i in range(len(candidates)):
            if target - candidates[i] < 0:
                break
            self.search(
                candidates[i:], target - candidates[i], path + [candidates[i]], result
            )
