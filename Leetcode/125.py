class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        ss = "".join(c.lower() for c in s if c.isalnum())
        return ss[::-1] == ss
