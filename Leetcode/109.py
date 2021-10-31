# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# time: O(nlogn)
# space: O(nlogn)
class Solution:
    def sortedListToBST(self, head):
        """
        :type head: ListNode
        :rtype: TreeNode
        """
        return self.dfs(head, None)

    def dfs(self, head, tail):
        if head == tail:
            return None
        slow, fast = head, head
        while fast != tail and fast.next != tail:
            fast = fast.next.next
            slow = slow.next
        root = TreeNode(slow.val)
        root.left = self.dfs(head, slow)
        root.right = self.dfs(slow.next, tail)
        return root
