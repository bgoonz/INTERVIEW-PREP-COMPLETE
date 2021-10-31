class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        dic = {}
        ans = []
        for i in range(0, len(s) - 9):
            if s[i : i + 10] not in dic:
                dic[s[i : i + 10]] = 1
            else:
                dic[s[i : i + 10]] += 1
        for k, v in dic.items():
            if v > 1:
                ans.append(k)
        return ans
