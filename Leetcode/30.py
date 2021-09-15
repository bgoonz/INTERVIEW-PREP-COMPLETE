class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words or len(s) == 0 or len(words) == 0:
            return []
        m, n = len(words[0]), len(words)
        result = []
        d = Counter(words)
        for start in range(min(m, len(s) - n * m + 1)):
            new_start = start
            end = start
            new_d = {}
            while new_start < len(s) - n * m + 1:
                w = s[end : end + m]
                end += m
                if w not in d:
                    new_d = {}
                    new_start = end
                else:
                    new_d[w] = new_d.get(w, 0) + 1
                    while new_d[w] > d[w]:
                        new_d[s[new_start : new_start + m]] -= 1
                        new_start += m

                    if new_start + n * m == end:
                        result.append(new_start)

        return result
