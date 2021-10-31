class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if len(s) <= numRows or numRows == 1:
            return s
        result = [""] * numRows
        index, step = 0, 1
        for c in s:
            if index == 0:
                step = 1
            elif index == numRows - 1:
                step = -1
            result[index] += c
            index += step
        return "".join(result)
