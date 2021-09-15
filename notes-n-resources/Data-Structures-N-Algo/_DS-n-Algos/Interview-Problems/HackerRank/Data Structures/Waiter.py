#!/bin/python3
import os
import sys

#
# Complete the waiter function below.
#
def waiter(number, q):
    def isPrime(n):
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True

    #
    # Write your code here.
    #
    x = 2
    it = 1
    primes = []
    res = []
    while it <= q:
        if isPrime(x):
            primes.append(x)
            x += 1
            it += 1
            continue
        x += 1

    A = [[] for _ in range(q + 1)]
    B = [[] for _ in range(q + 1)]
    A[0] = number
    for i in range(q):
        for j in range(len(A[i])):
            n = A[i].pop()
            if n % primes[i] == 0:
                B[i].append(n)
            else:
                A[i + 1].append(n)
    for i in range(len(B)):
        while B[i] != []:
            res.append(B[i].pop())
    for i in range(len(A)):
        while A[i] != []:
            res.append(A[i].pop())
    return res


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    nq = input().split()

    n = int(nq[0])

    q = int(nq[1])

    number = list(map(int, input().rstrip().split()))

    result = waiter(number, q)

    fptr.write("\n".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
