class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        candidates.sort()
        self.search(candidates, target, result, [])
        return result

    def search(self, candidates, target, result, path):
        if target == 0:
            result.append(path)

        for i in range(len(candidates)):
            if i > 0 and candidates[i - 1] == candidates[i]:
                continue
            if target < candidates[i]:
                break
            self.search(
                candidates[i + 1 :],
                target - candidates[i],
                result,
                path + [candidates[i]],
            )
