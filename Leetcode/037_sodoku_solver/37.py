class Solution:
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        self.solve(board)

    def findEmpty(self, board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == ".":
                    return (i, j)
        return None

    def solve(self, board):
        pos = self.findEmpty(board)
        if not pos:
            return True
        x, y = pos[0], pos[1]
        for v in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            if self.isValid(board, x, y, v):
                board[x][y] = v
                if self.solve(board):
                    return True
                board[x][y] = "."
        return False

    def isValid(self, board, row, col, val):
        for i in board[row]:
            if i == val:
                return False
        bb = list(zip(*board))
        for i in bb[col]:
            if i == val:
                return False

        r, c = row - row % 3, col - col % 3
        for i in range(r, r + 3):
            for j in range(c, c + 3):
                if board[i][j] == val:
                    return False
        return True
