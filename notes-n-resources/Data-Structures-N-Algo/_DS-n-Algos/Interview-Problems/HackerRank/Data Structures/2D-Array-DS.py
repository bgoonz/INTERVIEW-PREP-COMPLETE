import math


def hourglassSum(arr):
    s = -math.inf
    maxSum = -math.inf
    for i in range(len(arr) - 2):
        for j in range(len(arr[0]) - 2):
            s = (
                arr[i][j]
                + arr[i][j + 1]
                + arr[i][j + 2]
                + arr[i + 1][j + 1]
                + arr[i + 2][j]
                + arr[i + 2][j + 1]
                + arr[i + 2][j + 2]
            )
            if s > maxSum:
                maxSum = s
    return maxSum
