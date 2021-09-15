class Solution:
    def reverse(self, x: int) -> int:
        x = str(x)
        if x[0] == "-":
            a = x[1:2147483648:1]
            a = a[::-1]
            if int(a) > 2147483648:
                return 0
            return int("-" + a)
        else:
            a = x[::-1]
            if int(a) > 2147483647:
                return 0
            return int(a)
