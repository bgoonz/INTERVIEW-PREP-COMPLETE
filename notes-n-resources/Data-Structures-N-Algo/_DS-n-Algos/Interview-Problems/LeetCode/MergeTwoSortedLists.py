# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = l3 = ListNode(0)
        while l1 and l2:
            if l1.val > l2.val:
                l3.next = ListNode(l2.val)
                l3 = l3.next
                l2 = l2.next
            else:
                l3.next = ListNode(l1.val)
                l3 = l3.next
                l1 = l1.next
        while l1:
            l3.next = ListNode(l1.val)
            l3 = l3.next
            l1 = l1.next
        while l2:
            l3.next = ListNode(l2.val)
            l3 = l3.next
            l2 = l2.next
        return dummy.next


# Slightly More Optimized

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = l3 = ListNode()
        while l1 and l2:
            if l1.val < l2.val:
                l3.next = ListNode(l1.val)
                l1 = l1.next
                l3 = l3.next
            else:
                l3.next = ListNode(l2.val)
                l2 = l2.next
                l3 = l3.next
        l3.next = l1 or l2
        return head.next
