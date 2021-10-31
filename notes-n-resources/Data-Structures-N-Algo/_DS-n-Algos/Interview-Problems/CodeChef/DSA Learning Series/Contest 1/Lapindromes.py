from collections import Counter

T = int(input())
while T:
    s = input()
    n = len(s)
    if n % 2 == 0:
        print("YES") if Counter(s[0 : n // 2]) == Counter(s[(n // 2) : n]) else print(
            "NO"
        )
    else:
        print("YES") if Counter(s[0 : n // 2]) == Counter(
            s[(n // 2) + 1 : n]
        ) else print("NO")
    T -= 1
