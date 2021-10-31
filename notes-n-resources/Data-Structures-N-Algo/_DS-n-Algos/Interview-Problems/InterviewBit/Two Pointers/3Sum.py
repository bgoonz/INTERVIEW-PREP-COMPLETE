class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def threeSumClosest(self, A, B):
        A.sort()
        cs = math.inf
        for i in range(0, len(A) - 2):
            j = i + 1
            k = len(A) - 1
            while j < k:
                s = A[i] + A[j] + A[k]
                if s == B:
                    return s
                if abs(B - s) < cs:
                    cs = abs(B - s)
                    res = s
                if s <= B:
                    j += 1
                else:
                    k -= 1
        return res
