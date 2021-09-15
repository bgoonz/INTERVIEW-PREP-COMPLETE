# For your reference:
#
# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#
def reverse(head):
    temp = newHead = head
    while temp:
        prev = temp.prev
        temp.prev = temp.next
        temp.next = prev
        newHead = temp
        temp = temp.prev
    return newHead
