# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: TreeNode) -> int:
        queue = deque([root])
        visited = set()
        while queue:
            size = len(queue)
            leftmost = math.inf
            for i in range(size):
                node = queue.popleft()
                if leftmost == math.inf:
                    leftmost = node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if not queue:
                return leftmost
        return 0
