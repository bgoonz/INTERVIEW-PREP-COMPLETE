## BruteForce Solution that runs in O(n^2 * k) time
## K -> length of longest string that is checked


def isPalindrome(s):
    return s == s[::-1]


def palindromePair(arr):
    res = []
    size = len(arr)
    for i in range(size - 1):
        for j in range(i + 1, size):
            cc = arr[i] + arr[j]
            if isPalindrome(cc):
                res.append([i, j])

            cc = arr[j] + arr[i]
            if isPalindrome(cc):
                res.append([j, i])

    return res
