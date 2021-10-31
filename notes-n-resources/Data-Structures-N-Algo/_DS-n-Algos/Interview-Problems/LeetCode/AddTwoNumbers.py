# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        c = 0
        res = []
        while l1 or l2:
            s = 0 + c
            if l1:
                s += int(l1.val)
                l1 = l1.next
            if l2:
                s += int(l2.val)
                l2 = l2.next
            print(s)

            resa = s % 10
            res.append(resa)
            c = s // 10

        if c != 0:
            res.append(c)

        l3 = ListNode(0)
        head = l3
        for i in range(0, len(res)):
            lt = res[i]
            l3.next = ListNode(lt)
            l3 = l3.next
        return head.next
