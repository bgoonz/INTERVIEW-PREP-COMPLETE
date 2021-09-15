class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self):
        self.node = TrieNode()

    def add(self, word):
        node = self.node
        for c in word:
            node = node.children.setdefault(c, TrieNode())
        node.is_word = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = Trie()
        for word in words:
            trie.add(word)
        result = []
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(board, result, trie.node, i, j, "")
        return result

    def dfs(self, board, result, trie, x, y, word):
        if not trie:
            return
        if trie.is_word:
            result.append(word)
            trie.is_word = False
        if x < 0 or x >= len(board) or y < 0 or y >= len(board[0]):
            return
        curr = board[x][y]
        if curr in trie.children:
            board[x][y] = "#"
            for direction in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                self.dfs(
                    board,
                    result,
                    trie.children[curr],
                    x + direction[0],
                    y + direction[1],
                    word + curr,
                )
            board[x][y] = curr
