class Solution:
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        result = [0] * (len(num1) + len(num2))
        tail = len(result) - 1
        for n1 in reversed(num1):
            temp = tail
            for n2 in reversed(num2):
                result[temp] += int(n1) * int(n2)
                result[temp - 1] += result[temp] // 10
                result[temp] %= 10
                temp -= 1
            tail -= 1
        start = 0
        while start < len(result) - 1 and result[start] == 0:
            start += 1
        return "".join(map(str, result[start:]))
