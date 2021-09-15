#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

# Complete the beautifulPairs function below.
def beautifulPairs(A, B):
    bp = sum((Counter(A) - Counter(B)).values())
    return len(A) - bp + 1 if bp else len(A) - 1


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    A = list(map(int, input().rstrip().split()))

    B = list(map(int, input().rstrip().split()))

    result = beautifulPairs(A, B)

    fptr.write(str(result) + "\n")

    fptr.close()
