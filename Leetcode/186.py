"""
time complexity: O(mn)
"""


class Solution(object):
    def reverseWords(self, str):
        """
        :type str: List[str]
        :rtype: void Do not return anything, modify str in-place instead.
        """
        self.reverse(str, 0, len(str) - 1)
        start, end = 0, -1
        for i in range(len(str)):
            if str[i] == " ":
                start = end + 1
                end = i
                self.reverse(str, start, end - 1)
        self.reverse(str, end + 1, len(str) - 1)

    def reverse(self, str, left, right):
        while left < right:
            str[left], str[right] = str[right], str[left]
            left += 1
            right -= 1
