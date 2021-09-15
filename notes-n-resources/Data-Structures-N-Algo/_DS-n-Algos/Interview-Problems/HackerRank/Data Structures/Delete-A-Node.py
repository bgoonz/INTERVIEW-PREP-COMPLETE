# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def deleteNode(head, position):
    if position == 0:
        return head.next
    temp = head
    ptr = 1
    while ptr != position:
        temp = temp.next
        ptr += 1
    temp.next = temp.next.next
    return head
