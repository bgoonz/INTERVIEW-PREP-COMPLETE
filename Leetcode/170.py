class TwoSum:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.d = {}

    def add(self, number: int) -> None:
        """
        Add the number to an internal data structure..
        """
        if number in self.d:
            self.d[number] += 1
        else:
            self.d[number] = 1

    def find(self, value: int) -> bool:
        """
        Find if there exists any pair of numbers which sum is equal to the value.
        """
        result = False
        for n in self.d:
            if value - n in self.d:
                if value - n == n:
                    result = self.d[n] > 1
                else:
                    return True
        return result


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)
