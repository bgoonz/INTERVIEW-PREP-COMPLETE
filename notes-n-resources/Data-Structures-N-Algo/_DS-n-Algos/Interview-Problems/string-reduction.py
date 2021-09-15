#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'getMinDeletions' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#


def getMinDeletions(s):
    # Write your code here
    return len(s) - len(set(s))


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s = input()

    result = getMinDeletions(s)

    fptr.write(str(result) + "\n")

    fptr.close()
