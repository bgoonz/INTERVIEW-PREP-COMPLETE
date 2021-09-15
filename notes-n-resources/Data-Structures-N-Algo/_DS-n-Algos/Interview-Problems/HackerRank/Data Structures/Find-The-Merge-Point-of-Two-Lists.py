# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def findMergeNode(head1, head2):
    ptr1 = head1
    ptr2 = head2
    while ptr1 != ptr2:
        if ptr1.next == None:
            ptr1 = head2
        else:
            ptr1 = ptr1.next
        if ptr2.next == None:
            ptr2 = head1
        else:
            ptr2 = ptr2.next
    return ptr2.data
