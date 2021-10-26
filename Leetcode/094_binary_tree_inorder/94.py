# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root:
            return []
        return (
            self.inorderTraversal(root.left)
            + [root.val]
            + self.inorderTraversal(root.right)
        )


# iterative
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        stack, curr = [], root
        result = []
        while stack or curr:
            while curr:
                stack.append(curr)
                curr = curr.left
            top = stack.pop()
            result.append(top.val)
            curr = top.right
        return result
