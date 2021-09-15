class Solution:
    def countBits(self, num: int) -> List[int]:
        ans = [0]
        offset = 1
        for i in range(1, num + 1):
            if offset * 2 == i:
                offset = i
            ans.append(ans[i - offset] + 1)
        return ans
