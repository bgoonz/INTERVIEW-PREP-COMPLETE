class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        head = 0
        temp = ""
        tail = len(s) - 1
        while head < tail:
            temp = s[head]
            s[head] = s[tail]
            s[tail] = temp
            head += 1
            tail -= 1
