# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        dummy = p = ListNode(0)
        dummy.next = head
        l, r = head, head
        while True:
            count = 0
            while r and count < k:
                r = r.next
                count += 1
            if count == k:
                curr, prev = l, r
                for _ in range(k):
                    curr.next, prev, curr = prev, curr, curr.next
                p.next, p, l = prev, l, r
            else:
                return dummy.next
