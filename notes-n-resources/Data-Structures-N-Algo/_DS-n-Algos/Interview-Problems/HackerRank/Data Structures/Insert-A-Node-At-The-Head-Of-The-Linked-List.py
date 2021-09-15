# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def insertNodeAtHead(llist, data):
    temp = SinglyLinkedListNode(data)
    temp.next = llist
    return temp
