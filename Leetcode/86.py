# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        dummy1 = prev = ListNode(0)
        dummy2 = after = ListNode(0)
        while head:
            if head.val < x:
                prev.next = head
                prev = prev.next
            else:
                after.next = head
                after = after.next
            head = head.next
        prev.next = dummy2.next
        after.next = None
        return dummy1.next
