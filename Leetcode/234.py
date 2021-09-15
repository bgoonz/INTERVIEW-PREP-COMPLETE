# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        rev = None
        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow.next, rev, slow = rev, slow, slow.next
        if fast:
            slow = slow.next
        while rev and slow and rev.val == slow.val:
            rev = rev.next
            slow = slow.next
        return not rev
