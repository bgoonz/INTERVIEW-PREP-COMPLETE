## Recursive Solution

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        io = []

        if root == None:
            return []

        def inorder(x):
            if x.left != None:
                inorder(x.left)
            io.append(int(x.val))
            if x.right != None:
                inorder(x.right)

        inorder(root)
        return io


## Iterative Solution using Stack

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:

        if root == None:
            return []
        stack = []
        io = []
        c = root

        while c != None or len(stack) != 0:
            while c != None:
                stack.append(c)
                c = c.left
            c = stack.pop()
            io.append(c.val)
            c = c.right
        return io
