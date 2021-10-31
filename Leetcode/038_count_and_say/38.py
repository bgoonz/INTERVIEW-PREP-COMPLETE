"""
Time complexity: O(n)
"""


class Solution(object):
    # standard solution
    # def countAndSay(self, n):
    #     """
    #     :type n: int
    #     :rtype: str
    #     """
    #     if n < 1: return ''
    #     sequence = {1: '1', 2: '11', 3: '21', 4: '1211', 5: '111221'}
    #     if n <= 5: return sequence[n]
    #     i, current, result = 5, '111221', ''
    #     while i < n:
    #         result = self.get_next(current)
    #         i += 1
    #         current = result
    #     return result
    #
    # def get_next(self, current):
    #     prev, ret = '', ''
    #     count = 0
    #     for i in current:
    #         if prev == '' or i == prev:
    #             count += 1
    #             prev = i
    #         if i != prev:
    #             ret += str(count) + str(prev)
    #             count = 1
    #             prev = i
    #     return ret + str(count) + str(prev)

    # solution with tricks
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        result = "1"
        for i in range(n - 1):
            result = "".join(
                str(len(list(group))) + str(digit)
                for digit, group in itertools.groupby(result)
            )
        return result
