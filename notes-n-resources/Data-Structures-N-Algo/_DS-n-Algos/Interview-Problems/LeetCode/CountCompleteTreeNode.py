# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        self.c = 0

        def count(node):
            if node:
                if node.left:
                    count(node.left)
                if node.right:
                    count(node.right)
                self.c += 1
            return self.c

        count(root)
        return self.c
