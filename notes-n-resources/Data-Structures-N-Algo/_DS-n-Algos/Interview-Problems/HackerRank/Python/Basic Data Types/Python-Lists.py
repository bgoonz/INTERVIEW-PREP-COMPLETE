if __name__ == "__main__":
    list = []
    N = int(input())
    for _ in range(N):
        inp = input().split()
        if inp[0] == "insert":
            list.insert(int(inp[1]), int(inp[2]))
            continue
        if inp[0] == "print":
            print(list)
            continue
        if inp[0] == "remove":
            list.remove(int(inp[1]))
            continue
        if inp[0] == "append":
            list.append(int(inp[1]))
            continue
        if inp[0] == "sort":
            list = sorted(list)
            continue
        if inp[0] == "pop":
            list.pop()
            continue
        if inp[0] == "reverse":
            list = list[::-1]
            continue
