# time O(m*n*len(word))
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i in range(len(board)):
            for j in range(len(board[0])):
                if self.dfs(board, i, j, set(), word, 0):
                    return True
        return False

    def dfs(self, board, x, y, visited, word, idx):
        if idx == len(word):
            return True

        if (
            0 <= x < len(board)
            and 0 <= y < len(board[0])
            and (x, y) not in visited
            and board[x][y] == word[idx]
        ):
            for direction in [(0, -1), (0, 1), (1, 0), (-1, 0)]:
                new_x, new_y = x + direction[0], y + direction[1]
                if self.dfs(board, new_x, new_y, visited | {(x, y)}, word, idx + 1):
                    return True
        return False
