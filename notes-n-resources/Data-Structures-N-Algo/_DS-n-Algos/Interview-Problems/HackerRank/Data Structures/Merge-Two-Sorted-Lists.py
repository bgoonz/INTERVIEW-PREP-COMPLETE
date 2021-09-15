# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def mergeLists(head1, head2):
    mergedList = mhead = SinglyLinkedListNode(-1)
    while head1 and head2:
        if head1.data < head2.data:
            mergedList.next = SinglyLinkedListNode(head1.data)
            head1 = head1.next
            mergedList = mergedList.next
        else:
            mergedList.next = SinglyLinkedListNode(head2.data)
            head2 = head2.next
            mergedList = mergedList.next
    while head1:
        mergedList.next = SinglyLinkedListNode(head1.data)
        mergedList = mergedList.next
        head1 = head1.next
    while head2:
        mergedList.next = SinglyLinkedListNode(head2.data)
        mergedList = mergedList.next
        head2 = head2.next
    return mhead.next
