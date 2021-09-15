#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

# Complete the winningLotteryTicket function below.
def winningLotteryTicket(tickets):
    l = [0] * len(tickets)
    mx = (2 ** 10) - 1
    for i in range(len(tickets)):
        x = set(tickets[i])
        if "0" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "1" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "2" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "3" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "4" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "5" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "6" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "7" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "8" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
        if "9" in x:
            l[i] = l[i] * 10 + 1
        else:
            l[i] = l[i] * 10
    p = 0
    for i in range(len(l)):
        l[i] = int(str(l[i]), 2)
    count = Counter(l)
    for i in range(0, mx + 1):
        for j in range(i, mx + 1):
            if i | j == 1023:
                if i == j:
                    p += (count[i] * (count[i] - 1)) // 2
                else:
                    p = p + (count[i] * count[j])
    return p


if name == "main":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    tickets = []

    for _ in range(n):
        tickets_item = input()
        tickets.append(tickets_item)

    result = winningLotteryTicket(tickets)

    fptr.write(str(result) + "\n")

    fptr.close()
