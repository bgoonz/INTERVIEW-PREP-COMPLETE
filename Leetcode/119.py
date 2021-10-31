class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0:
            return [1]
        s = [1]
        for i in range(1, rowIndex + 1):
            s = [sum(x) for x in zip([0] + s, s + [0])]
        return s
