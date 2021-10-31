# Enter your code here. Read input from STDIN. Print output to STDOUT
k = int(input())
l = list(map(int, input().split()))
captain = ((sum(set(l)) * k) - sum(l)) // (k - 1)
print(captain)
