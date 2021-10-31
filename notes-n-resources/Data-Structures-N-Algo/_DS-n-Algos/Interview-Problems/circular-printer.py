#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'getTime' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts STRING s as parameter.
#
import string
from collections import OrderedDict


def getTime(s):
    # Write your code here
    d = dict(zip(string.ascii_uppercase, range(0, 26)))
    dist = min(abs(d["A"] - d[s[0]]), 26 - abs(d["A"] - d[s[0]]))
    for i in range(1, len(s)):
        if abs(d[s[i]] - d[s[i - 1]]) > 13:
            dist += 26 - abs(d[s[i]] - d[s[i - 1]])
            print(dist)
        else:
            dist += abs(d[s[i]] - d[s[i - 1]])
            print(dist)
    return dist


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s = input()

    result = getTime(s)

    fptr.write(str(result) + "\n")

    fptr.close()
