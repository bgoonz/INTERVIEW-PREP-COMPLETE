#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'reverseArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY arr as parameter.
#


def reverseArray(arr):
    # Write your code here
    front = 0
    rev = len(arr) - 1
    while front < rev:
        arr[front], arr[rev] = arr[rev], arr[front]
        front += 1
        rev -= 1
    return arr


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    arr_count = int(input().strip())

    arr = []

    for _ in range(arr_count):
        arr_item = int(input().strip())
        arr.append(arr_item)

    result = reverseArray(arr)

    fptr.write("\n".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
