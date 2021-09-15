#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the jimOrders function below.
def jimOrders(orders):
    res = []
    for i in range(len(orders)):
        orders[i].append(i + 1)
    orders = sorted(orders, key=lambda x: x[0] + x[1])
    for i in range(len(orders)):
        res.append(orders[i][2])
    return res


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    orders = []

    for _ in range(n):
        orders.append(list(map(int, input().rstrip().split())))

    result = jimOrders(orders)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
