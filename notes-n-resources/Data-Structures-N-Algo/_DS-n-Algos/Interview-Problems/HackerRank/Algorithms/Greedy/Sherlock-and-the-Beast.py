#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the decentNumber function below.
def decentNumber(n):
    if n % 3 == 0 and n != 0:
        print(int("5" * n))
    elif n % 3 == 1 and n >= 10:
        print(int(((n - 10) * "5") + (10 * "3")))
    elif n % 3 == 2 and n >= 5:
        print(int(((n - 5) * "5") + (5 * "3")))
    else:
        print(-1)


if __name__ == "__main__":
    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        decentNumber(n)
