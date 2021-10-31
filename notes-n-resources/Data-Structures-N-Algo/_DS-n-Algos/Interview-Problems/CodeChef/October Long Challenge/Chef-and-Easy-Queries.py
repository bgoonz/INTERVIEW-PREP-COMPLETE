for _ in range(int(input())):
    n, k = map(int, input().split())
    inp = list(map(int, input().split()))
    if n == 1:
        print(int((inp[0] / k) + 1))
        continue
    total = 0
    day = 0
    dayFound = 0
    for i in range(n):
        day += 1
        if inp[i] + total < k:
            print(int(day))
            dayFound = 1
            break
        total = (inp[i] + total) - k
    if not dayFound:
        day += total / k
        print(int(day + 1))
