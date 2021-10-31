"""
Time complexity: O(N*N!)
"""


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()

        def find(path, A):
            if len(path) == len(nums):
                result.append(path)
                return
            for i in range(len(A)):
                if i > 0 and A[i - 1] == A[i]:
                    continue
                curr = A[i]
                find(path + [curr], A[:i] + A[i + 1 :])

        find([], nums)
        return result
