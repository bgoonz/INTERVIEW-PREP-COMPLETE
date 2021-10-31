# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

## Recursive Solution


class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if root == None:
            return []
        po = []

        def postorder(x):
            if not x:
                return
            postorder(x.left)
            postorder(x.right)
            po.append(x.val)

        postorder(root)
        return po
