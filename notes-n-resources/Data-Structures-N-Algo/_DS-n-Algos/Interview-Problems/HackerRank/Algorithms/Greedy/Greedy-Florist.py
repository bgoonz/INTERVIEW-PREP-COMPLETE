#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the getMinimumCost function below.
def getMinimumCost(k, c):
    c = sorted(c)[::-1]
    m = 1
    cost = 0
    for i in range(len(c)):
        if (i + 1) > (k * m):
            m += 1
        cost = cost + (m * c[i])
    return cost


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    minimumCost = getMinimumCost(k, c)

    fptr.write(str(minimumCost) + "\n")

    fptr.close()
