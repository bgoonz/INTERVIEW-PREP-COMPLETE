class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        s0 = [1]
        result = [s0]
        for i in range(1, numRows):
            s = [x + y for x, y in zip([0] + s0, s0 + [0])]
            result.append(s)
            s0 = s
        return result
