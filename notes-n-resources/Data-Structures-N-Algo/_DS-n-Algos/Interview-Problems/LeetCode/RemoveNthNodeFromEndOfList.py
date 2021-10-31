# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        tail = head
        length = 1
        while tail.next:
            length += 1
            tail = tail.next
        if length == 1:
            return None
        if length == n:
            return head.next
        tempnode = head
        for _ in range(0, length - n - 1):
            tempnode = tempnode.next
        tempnode.next = tempnode.next.next
        return head


# One Pass

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = fast = slow = ListNode()
        dummy.next = head
        if not head.next:
            return None
        for _ in range(n + 1):
            fast = fast.next
        while fast:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return dummy.next
