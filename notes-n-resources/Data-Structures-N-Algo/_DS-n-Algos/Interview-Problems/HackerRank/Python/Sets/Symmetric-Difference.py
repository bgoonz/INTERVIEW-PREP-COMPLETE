# Enter your code here. Read input from STDIN. Print output to STDOUT
m = int(input())
mset = set(map(int, input().split()))
n = int(input())
nset = set(map(int, input().split()))
sym = sorted(list(mset.difference(nset) | nset.difference(mset)))
print(*sym, sep="\n")
