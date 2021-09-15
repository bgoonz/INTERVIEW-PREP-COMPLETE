# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def getNode(head, positionFromTail):
    length = 0
    ptr = head
    while ptr:
        length += 1
        ptr = ptr.next
    if length == 1:
        return head.data
    ptr = head
    for _ in range(0, length - positionFromTail - 1):
        ptr = ptr.next
    return ptr.data
