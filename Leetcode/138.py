"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
from collections import defaultdict


class Solution:
    def copyRandomList(self, head: "Node") -> "Node":
        d = defaultdict(lambda: Node(0, None, None))
        d[None] = None
        curr = head
        while curr:
            d[curr].val = curr.val
            d[curr].next = d[curr.next]
            d[curr].random = d[curr.random]
            curr = curr.next
        return d[head]
