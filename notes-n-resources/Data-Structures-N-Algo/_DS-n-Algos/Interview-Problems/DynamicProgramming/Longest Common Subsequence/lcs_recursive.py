def LCSlength(X, Y, lx, ly):  # Parameters are the two strings and their lengths
    if lx == 0 or ly == 0:
        return 0
    if X[lx - 1] == Y[ly - 1]:
        return LCSlength(X, Y, lx - 1, ly - 1) + 1
    return max(LCSlength(X, Y, lx - 1, ly), LCSlength(X, Y, lx, ly - 1))


print("Enter the first string : \n")
X = input()
print("Enter the second string: \n")
Y = input()
print("The length of the LCS is : {}".format(LCSlength(X, Y, len(X), len(Y))))

# This solution has a time complexity of o(2^(lx+ly))
# Also, this LCS problem has overlapping subproblems
