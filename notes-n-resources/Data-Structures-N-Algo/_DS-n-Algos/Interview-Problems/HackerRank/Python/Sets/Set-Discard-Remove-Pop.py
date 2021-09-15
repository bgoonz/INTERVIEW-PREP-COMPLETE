n = int(input())
s = set(map(int, input().split()))
N = int(input())
queries = [input().split() for i in range(N)]
for i in range(N):
    if queries[i][0] == "pop":
        s.pop()
    if queries[i][0] == "remove":
        if int(queries[i][1]) in s:
            s.remove(int(queries[i][1]))
    if queries[i][0] == "discard":
        s.discard(int(queries[i][1]))
print(sum(s))
