# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def compare_lists(llist1, llist2):
    while llist1 and llist2:
        if llist1.data == llist2.data:
            llist1 = llist1.next
            llist2 = llist2.next
            continue
        else:
            return 0
    if not llist1 and not llist2:
        return 1
    return 0
