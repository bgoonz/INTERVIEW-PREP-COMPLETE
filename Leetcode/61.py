# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if not head:
            return []
        l = 1
        dummy = head
        while dummy.next:
            l += 1
            dummy = dummy.next
        k = k % l
        tail = dummy
        tail.next = head
        for i in range(l - k):
            tail = tail.next
        new_head = tail.next
        tail.next = None
        return new_head
