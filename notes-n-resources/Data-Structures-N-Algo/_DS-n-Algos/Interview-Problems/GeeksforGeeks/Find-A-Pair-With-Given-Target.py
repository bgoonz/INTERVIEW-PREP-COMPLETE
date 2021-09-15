"""
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

"""
# root : the root Node of the given BST
# target : the target sum
def isPairPresent(root, target):
    # code here.
    inorderArr = set()

    def inorder(node):
        if node:
            inorder(node.left)
            inorderArr.add(node.data)
            inorder(node.right)

    inorder(root)
    for i in inorderArr:
        if target - i in inorderArr:
            return 1
    return 0
