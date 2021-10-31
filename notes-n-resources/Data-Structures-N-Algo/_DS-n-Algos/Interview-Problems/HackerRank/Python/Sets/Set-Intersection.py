# Enter your code here. Read input from STDIN. Print output to STDOUT
e = int(input())
english = set(map(int, input().split()))
f = int(input())
french = set(map(int, input().split()))
print(len(english.intersection(french)))
