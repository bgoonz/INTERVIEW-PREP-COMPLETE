# time: O(n)
# space O(logn)
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        return self.dfs(0, len(nums) - 1, nums)

    def dfs(self, low, high, nums):
        if low > high:
            return None
        m = low + (high - low) // 2
        root = TreeNode(nums[m])
        root.left = self.dfs(low, m - 1, nums)
        root.right = self.dfs(m + 1, high, nums)
        return root
