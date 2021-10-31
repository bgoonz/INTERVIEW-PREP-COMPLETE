for _ in range(int(input())):
    N, K, X, Y = map(int, input().split())
    z = X
    f = 0
    while True:
        X = (X + K) % N
        if Y == X:
            f = 1
            break
        elif X == z:
            break
    if f == 1:
        print("YES")
    else:
        print("NO")
