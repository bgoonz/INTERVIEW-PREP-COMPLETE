class Solution:
    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        if not head:
            return None
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        for _ in range(m - 1):
            prev = prev.next
        start = prev.next
        then = start.next
        for _ in range(n - m):
            then.next, start.next = prev.next, then.next
            prev.next = then
            then = start.next
        return dummy.next
