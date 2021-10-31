for T in range(int(input())):
    N = int(input())
    m = 0
    for i in range(N):
        S, P, V = map(int, input().split())
        m = max(m, (P // (S + 1)) * V)
    print(m)
