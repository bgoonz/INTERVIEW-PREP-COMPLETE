#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumAbsoluteDifference function below.
def minimumAbsoluteDifference(arr):
    mn = math.inf
    arr = sorted(arr)
    for i in range(1, len(arr)):
        if abs(arr[i - 1] - arr[i]) < mn:
            mn = abs(arr[i - 1] - arr[i])
    return mn


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    result = minimumAbsoluteDifference(arr)

    fptr.write(str(result) + "\n")

    fptr.close()
