# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def generateTrees(self, n: int) -> List[TreeNode]:
        if n == 0:
            return []
        self.trees = {}
        return self.constructTree(1, n)

    def constructTree(self, start, end):
        if (start, end) in self.trees:
            return self.trees[(start, end)]
        if start > end:
            return [None]
        result = []
        for i in range(start, end + 1):
            leftnodes = self.constructTree(start, i - 1)
            rightnodes = self.constructTree(i + 1, end)
            for leftnode in leftnodes:
                for rightnode in rightnodes:
                    node = TreeNode(i)
                    node.left = leftnode
                    node.right = rightnode
                    result.append(node)
        self.trees[(start, end)] = result
        return result
