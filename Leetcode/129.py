# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.getSum(root, 0)

    def getSum(self, node, s):
        if not node:
            return 0
        if not node.left and not node.right:
            return s * 10 + node.val
        return self.getSum(node.left, s * 10 + node.val) + self.getSum(
            node.right, s * 10 + node.val
        )
