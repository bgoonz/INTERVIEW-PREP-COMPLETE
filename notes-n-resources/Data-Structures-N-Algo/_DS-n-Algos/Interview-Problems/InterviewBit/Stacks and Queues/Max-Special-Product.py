class NaiveSolution:
    # Naive Solution, TLE
    # @param A : list of integers
    # @return an integer
    def maxSpecialProduct(self, A):
        ls = 0
        rs = 0
        maxProduct = 0
        sp = 0
        for i in range(1, len(A) - 1):
            ls = 0
            rs = 0
            for j in range(i - 1, -1, -1):
                if A[j] > A[i]:
                    ls = j
                    break
            for j in range(i + 1, len(A)):
                if A[j] > A[i]:
                    rs = j
                    break
            if ls * rs > maxProduct:
                maxProduct = ls * rs
        return maxProduct % 1000000007
