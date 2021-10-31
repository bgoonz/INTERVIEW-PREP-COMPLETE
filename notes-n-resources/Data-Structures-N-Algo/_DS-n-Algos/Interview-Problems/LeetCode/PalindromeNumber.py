class Solution:
    def isPalindrome(self, x: int) -> bool:
        a = []
        x = str(x)
        x = list(x)
        a = x[::-1]
        if str(a) == str(x):
            return True
        else:
            return False
