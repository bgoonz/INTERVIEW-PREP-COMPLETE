# The read4 API is already defined for you.
# def read4(buf4: List[str]) -> int:
from collections import deque


class Solution:
    def __init__(self):
        self.q = deque()

    def read(self, buf: List[str], n: int) -> int:
        i = 0
        while i < n:
            while self.q and i < n:
                buf[i] = self.q.popleft()
                i += 1
            else:
                buf4 = [" "] * 4
                count = read4(buf4)
                if not count:
                    break
                self.q += buf4[:count]
        return i
