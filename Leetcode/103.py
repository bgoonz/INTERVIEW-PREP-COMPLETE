# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


from collections import deque
from typing import List

"""
Time: O(N)
Space: O(W), W refers to the width of tree
"""


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        result, queue = [], deque([(root, 1)])

        while queue:
            node, level = queue.popleft()
            if len(result) < level:
                result.append([])
            if level % 2 == 1:
                result[level - 1].append(node.val)
            else:
                result[level - 1] = [node.val] + result[level - 1]
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        return result


# DFS
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        result = []

        def dfs(result, level, node):
            if level > len(result):
                result.append([])
            if level % 2 == 1:
                result[level - 1].append(node.val)
            else:
                result[level - 1] = [node.val] + result[level - 1]
            if node.left:
                dfs(result, level + 1, node.left)
            if node.right:
                dfs(result, level + 1, node.right)

        dfs(result, 1, root)
        return result
