from collections import deque


class Vector2D(object):
    def __init__(self, vec2d):
        """
        Initialize your data structure here.
        :type vec2d: List[List[int]]
        """
        self.row = 0
        self.col = 0
        self.vec2d = vec2d

    def next(self):
        """
        :rtype: int
        """
        result = self.vec2d[self.row][self.col]
        self.col += 1
        return result

    def hasNext(self):
        """
        :rtype: bool
        """
        while self.row < len(self.vec2d):
            if self.col < len(self.vec2d[self.row]):
                return True
            else:
                self.row += 1
                self.col = 0
        return False

        # Your Vector2D object will be instantiated and called as such:
        # i, v = Vector2D(vec2d), []
        # while i.hasNext(): v.append(i.next())
