def power(n):
    return n != 0 and ((n & (n - 1)) == 0)


def main():
    for i in range(int(input())):
        n = int(input())
        if n == 1:
            print(1)
            continue
        elif n == 3:
            print("1 3 2")
            continue
        elif n == 5:
            print("2 3 1 5 4")
            continue
        elif power(n):
            print(-1)
            continue
        else:
            print("2 3 1 5 4")
            i = 6
            while i <= n:
                if power(i):
                    print(str(i + 1) + " " + str(i), end=" ")
                    i += 2
                else:
                    print(i)
                    i += 1
            print("\n")


main()
