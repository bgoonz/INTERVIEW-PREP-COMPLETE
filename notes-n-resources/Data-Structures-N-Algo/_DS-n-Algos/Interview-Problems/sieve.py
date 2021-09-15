def sieveOfEratosthenes(n):
    soe = [True] * (n-1)
    p = 2

    while True:
        multiplier = 2
        multiple = p * multiplier

        while multiple <= n:
            soe[multiple-2] = False
            multiplier += 1
            multiple = p * multiplier

        for i, prime in enumerate(soe):
            if prime and i+2 > p:
                p = i+2
                break

        else:
            break
    for i, prime in enumerate(soe):
        if prime:
            print(i+2)