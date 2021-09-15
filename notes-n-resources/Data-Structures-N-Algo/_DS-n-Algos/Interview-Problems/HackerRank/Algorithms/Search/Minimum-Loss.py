# DP Solution (For some reason fails testcase with input > 10^5)

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumLoss function below.
def minimumLoss(price):
    m = -math.inf
    dp = [[0 for _ in range(len(price))] for _ in range(len(price))]
    for i in range(0, len(price) - 1):
        for j in range(i + 1, len(price)):
            # print(i, j)
            dp[i][j] = dp[i][j - 1] + (price[j] - price[j - 1])
            # print(i, j, dp[i][j])
    for i in range(0, len(price) - 1):
        for j in range(i + 1, len(price)):
            if (dp[i][j] > m) and (dp[i][j] < 0):
                m = dp[i][j]
    return -m


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    price = list(map(int, input().rstrip().split()))

    result = minimumLoss(price)

    fptr.write(str(result) + "\n")

    fptr.close()

# Sorting based solution

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumLoss function below.
def minimumLoss(price):
    m = math.inf
    prices = {}
    for i in range(len(price)):
        prices[price[i]] = i
    print(prices)
    sprices = sorted(prices)
    for i in range(1, len(price)):
        if (sprices[i] - sprices[i - 1] < m) and (
            prices[sprices[i]] < prices[sprices[i - 1]]
        ):
            m = sprices[i] - sprices[i - 1]
    return m


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    price = list(map(int, input().rstrip().split()))

    result = minimumLoss(price)

    fptr.write(str(result) + "\n")

    fptr.close()
