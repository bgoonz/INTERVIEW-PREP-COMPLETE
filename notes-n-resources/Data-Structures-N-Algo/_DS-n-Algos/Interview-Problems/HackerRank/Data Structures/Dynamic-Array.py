def dynamicArray(n, queries):
    Q = len(queries)
    seqList = [[] for _ in range(n)]
    lastAnswer = 0
    la = []
    for i in range(Q):
        t, x, y = queries[i][0], queries[i][1], queries[i][2]
        if t == 1:
            seqList[(x ^ lastAnswer) % n].append(y)
        else:
            lastAnswer = seqList[(x ^ lastAnswer) % n][
                y % len(seqList[(x ^ lastAnswer) % n])
            ]
            print(lastAnswer)
            la.append(lastAnswer)
    return la
