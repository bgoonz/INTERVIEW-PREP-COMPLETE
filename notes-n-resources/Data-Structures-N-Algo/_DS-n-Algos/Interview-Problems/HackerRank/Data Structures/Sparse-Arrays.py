from collections import Counter


def matchingStrings(strings, queries):
    ans = []
    c = Counter(strings)
    for i in queries:
        if i in c:
            ans.append(c[i])
        else:
            ans.append(0)
    return ans
