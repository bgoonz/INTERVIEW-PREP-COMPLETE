# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def reversePrint(head):
    ans = []
    while head:
        ans.append(head.data)
        head = head.next
    for i in range(len(ans) - 1, -1, -1):
        print(ans[i])
