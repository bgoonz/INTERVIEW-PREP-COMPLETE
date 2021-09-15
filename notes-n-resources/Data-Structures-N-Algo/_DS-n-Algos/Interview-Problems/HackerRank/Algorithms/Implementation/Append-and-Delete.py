#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the appendAndDelete function below.
def appendAndDelete(s, t, k):
    x = 0
    if s == t:
        return "Yes"
    if k > (len(s) + len(t)):
        return "Yes"
    for i in range(min(len(s), len(t))):
        if s[i] == t[i]:
            if x == 0 and i == min(len(s), len(t)) - 1:
                x = (len(s) - i) + (len(t) - i)
            continue
        else:
            x = (len(s) - i) + (len(t) - i)
            print(x)
            break
    if x <= k and x % 2 == k % 2:
        return "Yes"
    return "No"


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s = input()

    t = input()

    k = int(input())

    result = appendAndDelete(s, t, k)

    fptr.write(result + "\n")

    fptr.close()
