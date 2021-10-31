class Solution:
    def reverseBits(self, n: int) -> int:
        s = str(bin(n))
        s = s[2:]
        s = "0" * (32 - len(s)) + s
        s = int(s[::-1], 2)
        return s
