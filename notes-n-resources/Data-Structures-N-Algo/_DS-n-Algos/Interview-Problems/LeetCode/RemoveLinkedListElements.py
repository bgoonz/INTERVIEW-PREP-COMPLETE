# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        pointer = ListNode(0)
        pointer.next = head

        tempnode = pointer
        while tempnode.next != None:
            if tempnode.next.val == val:
                tempnode.next = tempnode.next.next
            else:
                tempnode = tempnode.next
        return pointer.next
