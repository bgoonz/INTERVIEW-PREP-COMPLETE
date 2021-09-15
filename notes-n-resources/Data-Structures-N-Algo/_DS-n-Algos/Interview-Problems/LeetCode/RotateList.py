# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head:
            return None
        if not k == 0:
            tail = head
            length = 1

            while tail.next:
                length += 1
                tail = tail.next

            k = k % length

            tail.next = head

            tempnode = head

            for _ in range(0, length - k - 1):
                tempnode = tempnode.next
            a = tempnode.next
            tempnode.next = None
            return a
        return head
