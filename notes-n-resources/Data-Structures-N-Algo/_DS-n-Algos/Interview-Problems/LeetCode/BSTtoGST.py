# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        self.ans = 0

        def add(node):
            if not node:
                return
            add(node.right)
            self.ans += node.val
            node.val = self.ans
            add(node.left)

        add(root)
        return root
