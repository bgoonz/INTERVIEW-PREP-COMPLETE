class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = "".join(a for a in s if a.isalnum()).lower()
        return s == s[::-1]
