# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        queue = deque([(root, 1)])
        result = []

        while queue:
            node, depth = queue.popleft()
            if len(result) < depth:
                result.append(node.val)
            if node.right:
                queue.append((node.right, depth + 1))
            if node.left:
                queue.append((node.left, depth + 1))
        return result

    # def rightSideView(self, root: TreeNode) -> List[int]:
    #     result = []
    #
    #     def levelView(node, level):
    #         if not node:
    #             return
    #         if level > len(result):
    #             result.append(node.val)
    #         levelView(node.right, level + 1)
    #         levelView(node.left, level + 1)
    #
    #     levelView(root, 1)
    #     return result
