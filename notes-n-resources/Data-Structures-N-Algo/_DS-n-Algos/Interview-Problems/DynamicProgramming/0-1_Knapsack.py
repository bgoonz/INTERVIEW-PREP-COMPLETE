def knapSack01(W, wt, profit, n):
    K = [[0 for x in range(W + 1)] for x in range(n + 1)]

    # Bottom Up Tabulation
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i - 1] <= w:
                K[i][w] = max(profit[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w])
            else:
                K[i][w] = K[i - 1][w]
    return K[n][W]


# Driver Program
profit = [100, 20, 60, 40]
wt = [3, 2, 4, 1]
W = 5
n = len(profit)
print(knapSack01(W, wt, profit, n))
