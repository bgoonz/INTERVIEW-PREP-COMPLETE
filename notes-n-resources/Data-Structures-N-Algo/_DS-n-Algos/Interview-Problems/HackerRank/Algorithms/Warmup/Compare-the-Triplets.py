#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the compareTriplets function below.
def compareTriplets(a, b):
    pa = 0
    pb = 0
    x = 0
    while x < len(a):
        if a[x] > b[x]:
            pa += 1
        elif b[x] > a[x]:
            pb += 1
        else:
            x += 1
            continue
        x += 1
    return pa, pb


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    a = list(map(int, input().rstrip().split()))

    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a, b)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
