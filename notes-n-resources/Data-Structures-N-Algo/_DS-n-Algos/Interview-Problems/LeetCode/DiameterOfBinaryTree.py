# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:

        self.depth = 1

        def findDepth(first):
            if not first:
                return 0
            ld = findDepth(first.left)
            rd = findDepth(first.right)
            self.depth = max(self.depth, ld + rd + 1)
            return max(ld, rd) + 1

        findDepth(root)
        return self.depth - 1
