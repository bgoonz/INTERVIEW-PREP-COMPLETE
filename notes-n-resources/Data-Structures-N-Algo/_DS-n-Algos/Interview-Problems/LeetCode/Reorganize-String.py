class Solution:
    def reorganizeString(self, S: str) -> str:
        l = len(S)
        A = []
        for k, v in sorted((S.count(x), x) for x in set(S)):
            if k > (l + 1) / 2:
                return ""
            A.extend(k * v)
        # print(A)
        ans = [None] * l
        ans[::2], ans[1::2] = A[(l // 2) :], A[: (l // 2)]
        return "".join(ans)
