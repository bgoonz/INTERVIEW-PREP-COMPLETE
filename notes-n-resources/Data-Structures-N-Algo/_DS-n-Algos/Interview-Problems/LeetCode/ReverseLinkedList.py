# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        temp = head
        prev = None

        while temp != None:
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        return prev
