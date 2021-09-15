# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def removeDuplicates(head):
    dummy = head
    while dummy and dummy.next:
        if dummy.data == dummy.next.data:
            dummy.next = dummy.next.next
            continue
        dummy = dummy.next
    return head
