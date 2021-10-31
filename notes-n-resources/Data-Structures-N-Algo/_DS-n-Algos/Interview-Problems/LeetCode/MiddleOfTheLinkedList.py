# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        A = [head]
        while A[-1].next:
            A.append(A[-1].next)
        return A[len(A) // 2]


# Solution using Slow and Fast Pointers


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        slowPointer = head
        fastPointer = head

        while fastPointer and fastPointer.next:

            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next

        return slowPointer
