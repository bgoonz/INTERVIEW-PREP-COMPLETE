# For your reference:
#
# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#
def sortedInsert(head, data):
    ptr = head
    if data <= ptr.data:
        dummy = DoublyLinkedListNode(data)
        dummy.next = head
        head.prev = dummy
        return dummy
    while ptr:
        if data >= ptr.data:
            if ptr.next == None:
                ptr.next = DoublyLinkedListNode(data)
                dummy = ptr
                ptr = ptr.next
                ptr.prev = dummy
                return head
            if ptr.next.data >= data:
                print(ptr.next.data, ptr.data, data)
                temp = DoublyLinkedListNode(data)
                dummy = ptr.next
                ptr.next = temp
                temp.next = dummy
                dummy.prev = temp
                temp.prev = ptr
                return head
        ptr = ptr.next
