from sys import stdin, stdout


def trailingZeros(N):
    mul = 5
    zeros = 0
    while True:
        zeros += N // mul
        if mul > N:
            break
        mul = mul * 5
    return zeros


for _ in range(int(stdin.readline())):
    stdout.write(str(trailingZeros(int(stdin.readline()))) + "\n")
