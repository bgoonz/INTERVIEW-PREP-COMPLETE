#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

# Complete the makingAnagrams function below.
def makingAnagrams(s1, s2):
    s1 = Counter(s1)
    s2 = Counter(s2)
    res = 0
    for i in list(s1.keys()):
        if i in s2:
            res += abs(s1.get(i) - s2.get(i))
            del s1[i]
            del s2[i]
            continue
        res += abs(s1.get(i))
    for i in s2:
        res += s2.get(i)
    return res


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s1 = input()

    s2 = input()

    result = makingAnagrams(s1, s2)

    fptr.write(str(result) + "\n")

    fptr.close()
