#!/bin/python3

import math
import os
import random
import re
import sys
from collections import OrderedDict

# Complete the largestPermutation function below.
def largestPermutation(k, arr):
    N = len(arr)
    dic = {arr[x]: x for x in range(N)}
    swaps = 0
    for x in range(N, 0, -1):
        if dic[x] == N - x:
            continue
        else:
            dic[arr[N - x]] = dic[x]
            arr[dic[x]] = arr[N - x]
            dic[x] = N - x
            arr[N - x] = x
            swaps += 1
        if swaps == k:
            break
    return arr


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    arr = list(map(int, input().rstrip().split()))

    result = largestPermutation(k, arr)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
