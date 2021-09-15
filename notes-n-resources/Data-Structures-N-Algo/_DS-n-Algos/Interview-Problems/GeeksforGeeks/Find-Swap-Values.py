class Solution:
    def findSwapValues(self, a, n, b, m):
        # Your code goes here
        sa = sum(a)
        sb = sum(b)
        itb = iter(b)
        b = dict(zip(itb, itb))
        for i in a:
            if ((sb - sa + 2 * i) / 2) in b:
                return 1
        return -1
