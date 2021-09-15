#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'howMany' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING sentence as parameter.
#
import re


def howMany(sentence):
    # Write your code here
    # invalid = ['?', '.', '[', ']', '{', '}', '(', ')', ',', '!']
    l = sentence.split()
    n = 0
    for i in range(len(l)):
        t = 0
        if l[i].isnumeric():
            continue
        for j in range(0, len(l[i]) - 1):
            if l[i][j].isalpha() != True and l[i][j] != "-":
                t = 1
                break
        if t == 0:
            n += 1
    return n
