# Enter your code here. Read input from STDIN. Print output to STDOUT
A = set(map(int, input().split()))
n = int(input())
for _ in range(n):
    x = set(map(int, input().split()))
    if A >= x:
        continue
    else:
        print("False")
        exit()
print("True")
