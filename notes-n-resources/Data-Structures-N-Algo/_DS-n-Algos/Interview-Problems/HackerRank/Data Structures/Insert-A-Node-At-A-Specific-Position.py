# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def insertNodeAtPosition(head, data, position):
    temp = head
    ptr = 1
    while ptr != position:
        temp = temp.next
        ptr += 1
    sec = temp.next
    temp.next = SinglyLinkedListNode(data)
    temp = temp.next
    temp.next = sec
    return head
