#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the closestNumbers function below.
def closestNumbers(arr):
    arr = sorted(arr)
    mindif = math.inf
    res = []
    for i in range(1, len(arr)):
        if (abs(arr[i - 1] - arr[i])) < mindif:
            res.clear()
            res.append(arr[i - 1])
            res.append(arr[i])
            mindif = abs(arr[i - 1] - arr[i])
        elif abs(arr[i - 1] - arr[i]) == mindif:
            res.append(arr[i - 1])
            res.append(arr[i])
    return res


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    result = closestNumbers(arr)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
