class MyCircularDeque:
    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.maxsize = k
        self.size = 0
        self.decq = [0] * k
        self.front = self.rear = -1

    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if self.size == self.maxsize:
            return False
        else:
            if self.front == -1:
                self.front = self.rear = 0
            else:
                self.front = (self.front - 1) % self.maxsize
            self.decq[self.front] = value
            self.size += 1
            return True

    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if self.size == self.maxsize:
            return False
        else:
            if self.rear == -1:
                self.front = self.rear = 0
            else:
                self.rear = (self.rear + 1) % self.maxsize
            self.decq[self.rear] = value
            self.size += 1
            return True

    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.size == 0:
            return False
        else:
            if self.front == self.rear:
                self.front = self.rear = -1
            else:
                self.decq[self.front] = 0
                self.front = (self.front + 1) % self.maxsize
            self.size -= 1
            return True

    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.size == 0:
            return False
        else:
            if self.front == self.rear:
                self.front = self.rear = -1
            else:
                self.decq[self.rear] = 0
                self.rear = (self.rear - 1) % self.maxsize
            self.size -= 1
            return True

    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        return self.decq[self.front] if self.size != 0 else -1

    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        return self.decq[self.rear] if self.size != 0 else -1

    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """
        return self.size == 0

    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return self.size == self.maxsize


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()

# Another Optimized Solution
class MyCircularDeque:
    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.decq = []
        self.maxsize = k

    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if len(self.decq) < self.maxsize:
            self.decq.append(value)
            return True

    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if len(self.decq) < self.maxsize:
            self.decq.insert(0, value)
            return True

    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.decq:
            self.decq.pop()
            return True

    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.decq:
            del self.decq[0]
            return True

    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        return self.decq[-1] if self.decq else -1

    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        return self.decq[0] if self.decq else -1

    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """
        return len(self.decq) == 0

    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return len(self.decq) == self.maxsize


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
