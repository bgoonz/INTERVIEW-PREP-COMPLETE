# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def insertNodeAtTail(head, data):
    if head == None:
        head = SinglyLinkedListNode(data)
        return head
    temp = head
    while temp.next != None:
        temp = temp.next
    temp.next = SinglyLinkedListNode(data)
    return head
