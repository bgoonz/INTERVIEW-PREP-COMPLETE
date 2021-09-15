# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:
    def __init__(self, root: TreeNode):
        self.result = []

        def dfs(root):
            if not root:
                return
            if root.right:
                dfs(root.right)
            self.result.append(root.val)
            if root.left:
                dfs(root.left)

        dfs(root)

    def next(self) -> int:
        """
        @return the next smallest number
        """
        return self.result.pop()

    def hasNext(self) -> bool:
        """
        @return whether we have a next smallest number
        """
        return len(self.result) > 0


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
