"""
Time complexity: O(n^2)
"""

"""
	Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

	Example 1:

	Input: "babad"
	Output: "bab"
	Note: "aba" is also a valid answer.
	Example 2:

	Input: "cbbd"
	Output: "bb"
"""


class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        result = ""
        for i in range(len(s)):
            odd = self.getPalindrome(i, i, s)
            if len(result) < len(odd):
                result = odd
            even = self.getPalindrome(i, i + 1, s)
            if len(result) < len(even):
                result = even
        return result

    def getPalindrome(self, l, r, s):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1 : r]
