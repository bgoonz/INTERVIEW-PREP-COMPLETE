def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        A = list(map(int, input().split()))
        count = 0
        small = float("inf")
        for each in A:
            if each < small:
                small = each
                count += 1
        print(count)


if __name__ == "__main__":
    solve()
