#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the weightedUniformStrings function below.
def weightedUniformStrings(s, queries):
    alphabet = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26,
    }

    counter = 1
    us = set()
    res = []
    for i in range(len(s)):
        weight = alphabet[s[i]]
        if i + 1 != len(s) and s[i] == s[i + 1]:
            counter += 1
        else:
            counter = 1
        us.add(weight * counter)
    print(us)
    for i in range(len(queries)):
        if queries[i] in us:
            res.append("Yes")
        else:
            res.append("No")
    return res


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s = input()

    queries_count = int(input())

    queries = []

    for _ in range(queries_count):
        queries_item = int(input())
        queries.append(queries_item)

    result = weightedUniformStrings(s, queries)

    fptr.write("\n".join(result))
    fptr.write("\n")

    fptr.close()
