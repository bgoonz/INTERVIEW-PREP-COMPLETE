import math


class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.min = math.inf

    def push(self, x: int) -> None:
        self.x = x
        self.stack.append(x)
        if x < self.min:
            self.min = x

    def pop(self) -> None:
        t = self.stack.pop()
        if t == self.min and len(self.stack):
            self.min = min(self.stack)
        elif t == self.min and not len(self.stack):
            self.min = math.inf

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
