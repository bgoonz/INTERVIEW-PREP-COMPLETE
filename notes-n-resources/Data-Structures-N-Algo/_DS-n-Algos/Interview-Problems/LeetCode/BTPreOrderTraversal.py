# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

## Recursive Solution


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if root == None:
            return []
        po = []

        def preorder(x):
            if x:
                po.append(x.val)
                preorder(x.left)
                preorder(x.right)

        preorder(root)
        return po


## Iterative Solution


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if root == None:
            return []
        stack = []
        po = []
        c = root

        while c != None or len(stack) != 0:
            while c != None:
                stack.append(c)
                po.append(c.val)
                c = c.left
            c = stack.pop()
            c = c.right
        return po
