class Solution:
    # @param A : integer
    # @return an integer
    def trailingZeroes(self, A):
        five = 0
        i = 5
        while A / i >= 1:
            five += int(A / i)
            i *= 5
        return five
