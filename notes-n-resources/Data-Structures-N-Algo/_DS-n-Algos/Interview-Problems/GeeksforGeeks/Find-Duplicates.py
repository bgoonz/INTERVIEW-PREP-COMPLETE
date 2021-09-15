from collections import Counter


def duplicates(arr, n):
    # code here
    duplicates = []
    for i in range(n):
        arr[arr[i] % n] += n

    for i in range(n):
        if (arr[i] / n) >= 2:
            duplicates.append(i)
    duplicates.sort()
    return duplicates if duplicates else [-1]
