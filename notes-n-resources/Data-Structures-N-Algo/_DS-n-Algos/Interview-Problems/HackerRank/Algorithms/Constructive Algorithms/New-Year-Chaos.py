#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumBribes function below.
def minimumBribes(q):
    q = [P - 1 for P in q]
    c = 0
    for i, x in enumerate(q):
        if x - i > 2:
            print("Too chaotic")
            return
        for j in range(max(x - 1, 0), i):
            if q[j] > x:
                c += 1
    print(c)


if __name__ == "__main__":
    t = int(input())

    for t_itr in range(t):
        n = int(input())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)
