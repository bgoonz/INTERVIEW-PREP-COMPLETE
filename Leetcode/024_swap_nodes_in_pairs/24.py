# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        dummy = p = ListNode(0)
        dummy.next = head
        while head and head.next:
            curr = head.next
            head.next, curr.next = curr.next, head
            p.next = curr
            p = head
            head = head.next
        return dummy.next
