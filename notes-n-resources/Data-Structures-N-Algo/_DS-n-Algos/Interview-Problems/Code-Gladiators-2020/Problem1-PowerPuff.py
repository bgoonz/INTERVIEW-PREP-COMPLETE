import math


def main():
    N = int(input())
    Q = list(map(int, input().split()))
    I = list(map(int, input().split()))
    min = math.inf
    for i in range(N):
        if (I[i] // Q[i]) < min:
            min = I[i] // Q[i]
    print(min)


main()
