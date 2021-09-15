# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        result = []
        self.dfs(root, sum, [], result)
        return result

    def dfs(self, node, sum, path, result):
        if not node:
            return
        if not node.left and not node.right and node.val == sum:
            result.append(path + [node.val])
            return
        self.dfs(node.left, sum - node.val, path + [node.val], result)
        self.dfs(node.right, sum - node.val, path + [node.val], result)
