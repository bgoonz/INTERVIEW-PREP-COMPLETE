#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the highestValuePalindrome function below.
def highestValuePalindrome(s, n, k):
    changes = 0
    l = 0
    h = len(s) - 1
    s = list(s)
    for i in range(0, n // 2):
        if s[i] != s[-i - 1]:
            changes += 1
    if changes > k:
        return "-1"
    while h >= l:
        if k <= 0:
            break
        if s[l] == s[h]:
            if k > 1 and (k - 2 >= (changes)) and s[l] != "9":
                s[l] = "9"
                s[h] = "9"
                k -= 2
        else:
            if (k > 1) and ((k - 2) >= changes - 1):
                if s[l] != "9":
                    s[l] = "9"
                    k -= 1
                if s[h] != "9":
                    s[h] = "9"
                    k -= 1
            else:
                if s[l] > s[h]:
                    s[h] = s[l]
                else:
                    s[l] = s[h]
                k -= 1
            changes -= 1
        if l == h and k > 0:
            s[l] = "9"
            k -= 1
        l += 1
        h -= 1
    a = ""
    for i in range(len(s)):
        a += s[i]
    if a == a[::-1]:
        return a
    else:
        return "-1"


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    s = input()

    result = highestValuePalindrome(s, n, k)

    fptr.write(result + "\n")

    fptr.close()
