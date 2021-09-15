def multiple(K, d0, d1):
    mul = d0 + d1
    fac = (K - 3) // 4
    repeat = ((2 * mul) % 10) + ((4 * mul) % 10) + ((8 * mul) % 10) + ((6 * mul) % 10)
    sd = mul + (mul % 10) + (repeat * fac)
    if (K - 3) % 4 == 1:
        x = (2 * mul) % 10
    elif (K - 3) % 4 == 2:
        x = ((2 * mul) % 10) + ((4 * mul) % 10)
    elif (K - 3) % 4 == 3:
        x = ((2 * mul) % 10) + ((4 * mul) % 10) + ((8 * mul) % 10)
    sd += x
    if sd % 3 == 0:
        return "YES"
    else:
        return "NO"


for _ in range(int(input())):
    l = [int(x) for x in input().strip().split()]
    K, d0, d1 = l[0], l[1], l[2]
    print(multiple(K, d0, d1), end="\n")
