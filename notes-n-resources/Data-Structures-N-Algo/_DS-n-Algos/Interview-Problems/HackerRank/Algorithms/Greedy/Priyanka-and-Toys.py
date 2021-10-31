#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the toys function below.
def toys(w):
    w = sorted(w)
    containers = 1
    x = w[0]
    for i in range(1, len(w)):
        if w[i] > (x + 4):
            x = w[i]
            containers += 1
    return containers


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    w = list(map(int, input().rstrip().split()))

    result = toys(w)

    fptr.write(str(result) + "\n")

    fptr.close()
