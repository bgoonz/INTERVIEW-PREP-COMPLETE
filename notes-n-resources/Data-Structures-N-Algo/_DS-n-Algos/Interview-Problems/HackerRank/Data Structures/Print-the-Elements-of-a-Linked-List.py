# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def printLinkedList(head):
    while True:
        print(head.data)
        head = head.next
        if not head:
            break
