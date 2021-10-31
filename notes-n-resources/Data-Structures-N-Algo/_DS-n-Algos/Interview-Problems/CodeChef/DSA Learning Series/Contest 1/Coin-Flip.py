from sys import stdin, stdout


def coinFlip(I, N, Q):
    if N % 2 == 0:
        return N // 2
    else:
        if I == 1:
            if Q == 1:
                return N // 2
            else:
                return (N // 2) + 1
        else:
            if Q == 1:
                return (N // 2) + 1
            else:
                return N // 2


for _ in range(int(stdin.readline())):
    G = int(stdin.readline())
    for _ in range(G):
        I, N, Q = map(int, input().split())
        stdout.write(str(coinFlip(I, N, Q)) + "\n")
