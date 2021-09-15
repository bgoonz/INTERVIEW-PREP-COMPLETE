#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

# Complete the sherlockAndAnagrams function below.
def sherlockAndAnagrams(s):
    if all(value == 0 for value in Counter(s).values()):
        return 0
    substrings = []
    c = 0
    for i in range(0, len(s)):
        for j in range(i + 1, len(s) + 1):
            substrings.append(s[i:j])
    sub_counts = [
        "".join(["{0}{1}".format(x, y) for (x, y) in sorted(Counter(sub).items())])
        for sub in substrings
    ]
    return sum([(v * (v - 1) // 2) for v in Counter(sub_counts).values()])


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    q = int(input())

    for q_itr in range(q):
        s = input()

        result = sherlockAndAnagrams(s)

        fptr.write(str(result) + "\n")

    fptr.close()
