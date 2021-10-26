# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# class Solution:
#     def isValidBST(self, root: TreeNode) -> bool:
#         return self.isValid(root, float('-inf'), float('inf'))

#     def isValid(self, root, lower, upper):
#         if not root: return True
#         if root.val <= lower or root.val >= upper: return False
#         return self.isValid(root.left, lower, root.val) and self.isValid(root.right, root.val, upper)


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        stack, curr, prev = [], root, None
        while stack or curr:
            while curr:
                stack.append(curr)
                curr = curr.left
            top = stack.pop()
            if prev and prev.val >= top.val:
                return False
            prev = top
            curr = top.right
        return True
