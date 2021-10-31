class Solution:
    def minDeletionSize(self, A: List[str]) -> int:
        s = 0
        for col in zip(*A):
            if any(col[i] > col[i + 1] for i in range(len(col) - 1)):
                s += 1
        return s
