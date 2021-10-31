# Enter your code here. Read input from STDIN. Print output to STDOUT
t = int(input())
for _ in range(t):
    na = int(input())
    a = set(map(int, input().split()))
    nb = int(input())
    b = set(map(int, input().split()))
    print("True" if a <= b else "False")
