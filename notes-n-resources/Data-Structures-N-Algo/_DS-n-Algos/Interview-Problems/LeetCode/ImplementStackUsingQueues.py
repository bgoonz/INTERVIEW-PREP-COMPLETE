## Implementation Using queue.Queue()
## Faster than 67%

from queue import Queue


class MyStack:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.q1 = Queue(maxsize=0)
        self.q2 = Queue(maxsize=0)

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.q1.put(x)

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())
        temp = self.q1.get()
        while self.q2.qsize() > 0:
            self.q1.put(self.q2.get())
        return temp

    def top(self) -> int:
        """
        Get the top element.
        """
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())
        temp = self.q1.get()
        while self.q2.qsize() > 0:
            self.q1.put(self.q2.get())
        self.q1.put(temp)
        return temp

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return self.q1.empty()


## Implementation using Deque
## Faster than 100%

from collections import deque


class MyStack:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.q = deque()

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.q.append(x)

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self.q.pop()

    def top(self) -> int:
        """
        Get the top element.
        """
        temp = self.q.pop()
        self.q.append(temp)
        return temp

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return False if len(self.q) else True


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
