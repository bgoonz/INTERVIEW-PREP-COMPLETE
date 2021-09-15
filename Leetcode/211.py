class TreeNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class WordDictionary:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TreeNode()

    def addWord(self, word: str) -> None:
        """
        Adds a word into the data structure.
        """
        node = self.root
        for c in word:
            if c in node.children:
                node = node.children[c]
            else:
                node.children[c] = TreeNode()
                node = node.children[c]
        node.is_word = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
        """
        return self.searchNode(self.root, word)

    def searchNode(self, node, word):
        for i, c in enumerate(word):
            if c == ".":
                return any(
                    self.searchNode(node.children[k], word[i + 1 :])
                    for k in node.children
                )
            if c not in node.children:
                return False
            node = node.children[c]
        return node.is_word
