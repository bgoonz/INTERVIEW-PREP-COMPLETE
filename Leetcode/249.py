class Solution:
    def groupStrings(self, strings: List[str]) -> List[List[str]]:
        d = {}
        for s in strings:
            key = []
            for i in range(1, len(s)):
                key.append(str((ord(s[i]) - ord(s[i - 1])) % 26))
            k = ",".join(key)
            d[k] = d.get(k, []) + [s]
        return list(d.values())
