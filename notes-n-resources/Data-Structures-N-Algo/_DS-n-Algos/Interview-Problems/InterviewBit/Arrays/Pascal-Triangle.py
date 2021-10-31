class Solution:
    # @param A : integer
    # @return a list of list of integers
    def solve(self, A):
        pas = []
        if A == 0:
            pas = []
        elif A == 1:
            pas = [[1]]
        elif A == 2:
            pas = [[1], [1, 1]]
        else:
            pas = [[1], [1, 1]]
            for i in range(2, A):
                pas.append([1])
                for j in range(1, i):
                    pas[i].append(pas[i - 1][j - 1] + pas[i - 1][j])
                pas[i].append(1)
        return pas
