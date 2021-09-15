# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def reverse(head):
    if not head:
        return None
    temp = prev = head
    sec = head.next
    head.next = None
    while sec.next:
        temp = sec.next
        sec.next = prev
        prev = sec
        sec = temp
    sec.next = prev
    return sec
