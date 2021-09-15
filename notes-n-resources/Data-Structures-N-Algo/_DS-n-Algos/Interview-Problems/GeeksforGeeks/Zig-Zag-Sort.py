class Solution1:
    def zigZag(self, arr, n):
        # code here
        arr.sort()
        for i in range(1, n - 1, 2):
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
        return arr


class Solution2:
    def zigZag(self, arr, n):
        # code here
        flag = True
        for i in range(n - 1):
            if flag:
                if arr[i] > arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]
            else:
                if arr[i] < arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]
            flag = bool(1 - flag)
        return arr
