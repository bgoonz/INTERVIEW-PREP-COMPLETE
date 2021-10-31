class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        l1 = [int(s) for s in version1.split(".")]
        l2 = [int(s) for s in version2.split(".")]

        len1, len2 = len(l1), len(l2)
        if len1 > len2:
            l2 += [0] * (len1 - len2)
        elif len1 < len2:
            l1 += [0] * (len2 - len1)

        return (l1 > l2) - (l1 < l2)
