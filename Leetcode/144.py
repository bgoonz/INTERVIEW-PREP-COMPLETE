# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if root:
            return (
                [root.val]
                + self.preorderTraversal(root.left)
                + self.preorderTraversal(root.right)
            )
        return []

        # iterative
        # result = []
        # stack = [root]
        # while stack:
        #     curr = stack.pop()
        #     if curr:
        #         result.append(curr.val)
        #         stack.append(curr.right)
        #         stack.append(curr.left)
        # return result
