# Enter your code here. Read input from STDIN. Print output to STDOUT
n, s = map(int, input().split())
data = [list(map(float, input().split())) for _ in range(s)]
for i in zip(*data):
    print("%.2f" % (sum(i) / s))
