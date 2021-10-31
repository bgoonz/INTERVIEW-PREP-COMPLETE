#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the flippingMatrix function below.
def flippingMatrix(matrix):
    n = len(matrix)
    seen = set()
    maxes = []
    for i in range(len(matrix) - 1):
        for j in range(i + 1, len(matrix[0])):
            if (i, j) not in seen:
                ri, rj = mirror_row(i, j, n)
                di, dj = mirror_col(ri, rj, n)
                li, lj = mirror_row(di, dj, n)
                gp = [matrix[i][j], matrix[ri][rj], matrix[di][dj], matrix[li][lj]]
                seen |= set([(i, j), (ri, rj), (di, dj), (li, lj)])
                maxes.append(max(gp))
    return sum(maxes)


def mirror_row(i, j, n):
    return i, n - j - 1


def mirror_col(i, j, n):
    return n - i - 1, j


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    q = int(input())

    for q_itr in range(q):
        n = int(input())

        matrix = []

        for _ in range(2 * n):
            matrix.append(list(map(int, input().rstrip().split())))

        result = flippingMatrix(matrix)

        fptr.write(str(result) + "\n")

    fptr.close()
