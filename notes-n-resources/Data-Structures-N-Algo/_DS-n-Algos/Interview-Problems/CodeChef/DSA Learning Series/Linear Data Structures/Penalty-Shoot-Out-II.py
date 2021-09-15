for T in range(int(input())):
    N = int(input())
    S = input()
    ca = 0
    cb = 0
    na = N
    nb = N
    ans = True
    for i in range(len(S)):
        if i % 2 != 0:
            if S[i] == "1":
                ca += 1
                na -= 1
            else:
                na -= 1
        else:
            if S[i] == "1":
                cb += 1
                nb -= 1
            else:
                nb -= 1
        if (ca + na) < cb or (cb + nb) < ca:
            print(i + 1)
            ans = True
            break
        else:
            ans = False
    if ans == False:
        print(2 * N)
