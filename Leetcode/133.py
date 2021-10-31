"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
from collections import deque


class Solution:
    def cloneGraph(self, node: "Node") -> "Node":
        if not node:
            return None
        visited = {node: Node(node.val)}
        queue = deque([node])
        while queue:
            curr = queue.popleft()
            for n in curr.neighbors:
                if n not in visited:
                    new = Node(n.val)
                    visited[n] = new
                    queue.append(n)
                visited[curr].neighbors.append(visited[n])
        return visited[node]
