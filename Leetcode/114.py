# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# time: O(n)
# space: O(1)


class Solution:
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        while root:
            if not root.right:
                root.left, root.right = root.right, root.left
            elif root.left:
                root.left, root.right = root.right, root.left
                it = root
                while it.right:
                    it = it.right
                root.left, it.right = it.right, root.left
            root = root.right
