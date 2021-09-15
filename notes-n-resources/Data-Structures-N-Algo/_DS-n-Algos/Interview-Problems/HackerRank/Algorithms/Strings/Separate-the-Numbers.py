for _ in range(int(input())):
    s = input()
    l = len(s)
    for i in range(1, l // 2 + 1):
        check = s[:i]
        add = int(check)
        while check in s:
            add += 1
            check += f"{add}"
            if check == s:
                break
        else:
            continue
        print("YES", s[:i])
        break
    else:
        print("NO")
