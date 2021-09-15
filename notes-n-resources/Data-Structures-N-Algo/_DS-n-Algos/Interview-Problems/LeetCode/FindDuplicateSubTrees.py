# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def findDuplicateSubtrees(self, root: TreeNode) -> List[TreeNode]:
        tree = collections.defaultdict()
        tree.default_factory = tree.__len__
        c = collections.Counter()
        anslist = []

        def find(node):
            if node:
                tid = tree[node.val, find(node.left), find(node.right)]
                c[tid] += 1
                if c[tid] == 2:
                    anslist.append(node)
                return tid

        find(root)
        return anslist
