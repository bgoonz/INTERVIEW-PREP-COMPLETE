#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maximumPerimeterTriangle function below.
def maximumPerimeterTriangle(sticks):
    sticks = sorted(sticks)[::-1]
    for i in range(0, len(sticks) - 2):
        if (sticks[i] < (sticks[i + 1] + sticks[i + 2])) or (
            sticks[i] == sticks[i + 1] == sticks[i + 2]
        ):
            return sticks[i + 2], sticks[i + 1], sticks[i]
    return (-1,)


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    sticks = list(map(int, input().rstrip().split()))

    result = maximumPerimeterTriangle(sticks)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
