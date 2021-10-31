class Solution:
    # @param A : integer
    # @return a list of strings
    def fizzBuzz(self, A):
        res = []
        for i in range(1, A + 1):
            if i % 15 == 0:
                res.append("FizzBuzz")
                continue
            if i % 3 == 0:
                res.append("Fizz")
                continue
            if i % 5 == 0:
                res.append("Buzz")
                continue
            res.append(i)
        return res
