"""
Time: O(log mn)
"""


class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return False

        m, n = len(matrix), len(matrix[0])
        l, r = 0, m * n - 1
        while l <= r:
            mid = l + (r - l) // 2
            val = matrix[mid // n][mid % n]
            if val == target:
                return True
            elif val > target:
                r = mid - 1
            else:
                l = mid + 1
        return False
