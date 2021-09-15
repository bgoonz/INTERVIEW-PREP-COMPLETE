# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        result = []

        def inorder(node):
            if node:
                if node.left != None:
                    inorder(node.left)
                result.append(int(node.val))
                if node.right != None:
                    inorder(node.right)

        def constructBalancedTree(arr):
            if not arr:
                return None
            mid = len(arr) // 2
            root = TreeNode(arr[mid])
            root.left = constructBalancedTree(arr[:mid])
            root.right = constructBalancedTree(arr[mid + 1 :])
            return root

        inorder(root)
        # result = [int(x.val) for x in result]
        return constructBalancedTree(result)
