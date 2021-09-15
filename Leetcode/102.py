# Definition for a binary tree node.
from typing import List
from collections import deque


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        queue = deque([(root, 0)])
        result = []

        while queue:
            node, level = queue.popleft()
            if len(result) - 1 < level:
                result.append([])
            result[level].append(node.val)
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        return result


class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
            return []
        result = []
        this_level = [root]
        while this_level:
            result.append([node.val for node in this_level])
            this_level = [
                child
                for node in this_level
                for child in (node.left, node.right)
                if child
            ]
        return result
