class Solution:
    def countElements(self, arr: List[int]) -> int:
        s = set()
        s = set(arr)
        c = 0
        for i in range(len(arr)):
            if arr[i] + 1 in s:
                c += 1
        return c
