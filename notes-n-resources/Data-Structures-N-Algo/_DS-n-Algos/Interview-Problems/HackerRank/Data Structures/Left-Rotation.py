import math
import os
import random
import re
import sys

if __name__ == "__main__":
    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    a = list(map(int, input().rstrip().split()))

    a = a[(d % n) : n] + a[0 : (d % n)]

    for i in range(len(a)):
        print(a[i], end=" ")
