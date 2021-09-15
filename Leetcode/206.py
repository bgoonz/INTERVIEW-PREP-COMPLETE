class Solution:
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = None
        while head:
            head.next, prev, head = prev, head, head.next
        return prev
