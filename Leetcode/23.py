# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


import heapq
from typing import List


class Solution:
    # (1) divide and conquer
    # def mergeKLists(self, lists: List[ListNode]) -> ListNode:
    #     if not lists or len(lists) == 0:
    #         return None
    #     return self.mergeHelper(lists, 0, len(lists) - 1)
    #
    # def mergeHelper(self, lists, start, end):
    #     if start == end:
    #         return lists[start]
    #     mid = (start + end) // 2
    #     left = self.mergeHelper(lists, start, mid)
    #     right = self.mergeHelper(lists, mid + 1, end)
    #     return self.mergeTwoLists(left, right)
    #
    # def mergeTwoLists(self, l1, l2):
    #     dummy = curr = ListNode(0)
    #     while l1 and l2:
    #         if l1.val <= l2.val:
    #             curr.next = l1
    #             l1 = l1.next
    #         else:
    #             curr.next = l2
    #             l2 = l2.next
    #         curr = curr.next
    #     curr.next = l1 or l2
    #     return dummy.next

    ## (2) merge next 2 nodes
    # def mergeKLists(self, lists: List[ListNode]) -> ListNode:
    #     if not lists or len(lists) == 0: return None
    #     while len(lists) > 1:
    #         newList = []
    #         for i in range(0, len(lists) - 1, 2):
    #             newList.append(self.mergeTwoLists(lists[i], lists[i + 1]))
    #         if len(lists) % 2 == 1:
    #             newList.append(lists[-1])
    #         lists = newList
    #     return lists[0]
    #
    # def mergeTwoLists(self, l1, l2):
    #     dummy = curr = ListNode(0)
    #     while l1 and l2:
    #         if l1.val <= l2.val:
    #             curr.next = l1
    #             l1 = l1.next
    #         else:
    #             curr.next = l2
    #             l2 = l2.next
    #         curr = curr.next
    #     curr.next = l1 or l2
    #     return dummy.next

    ## (3) minHeap
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        dummy = curr = ListNode(0)
        q = []
        for idx, node in enumerate(lists):
            if node:
                heapq.heappush(q, (node.val, idx, node))
        while q:
            val, idx, node = heapq.heappop(q)
            curr.next = ListNode(val)
            curr = curr.next
            if node.next:
                heapq.heappush(q, (node.next.val, idx, node.next))
        return dummy.next
