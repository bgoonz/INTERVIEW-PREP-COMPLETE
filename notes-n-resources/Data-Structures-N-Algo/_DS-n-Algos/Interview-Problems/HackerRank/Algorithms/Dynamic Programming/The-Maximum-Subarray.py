#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maxSubarray function below.
def maxSubarray(arr):
    dp = arr.copy()
    m = max(arr)
    print(arr, dp)
    if dp[0] < 0:
        dp[0] = 0
    for i in range(1, len(arr)):
        if arr[i - 1] > 0:
            arr[i] += arr[i - 1]
        if dp[i - 1] > 0:
            if dp[i] < 0:
                dp[i] = dp[i - 1]
            else:
                dp[i] += dp[i - 1]
        else:
            dp[i] = dp[i - 1]
        # print(arr, dp)
    if max(dp) == 0:
        return max(arr), m
    return max(arr), max(dp)


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = maxSubarray(arr)

        fptr.write(" ".join(map(str, result)))
        fptr.write("\n")

    fptr.close()
