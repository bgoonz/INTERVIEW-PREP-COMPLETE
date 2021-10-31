## Naive Solution that runs in O(n^2)
## Traverses the array, and finds the maximum left or right element.
## rainwater that can be stored in the column =  min(left, right) - height[i]
class NaiveSolution:
    def trap(self, height) -> int:
        res = 0
        n = len(height)
        for i in range(1, n - 1):
            left = height[i]
            for j in range(i):
                left = max(left, height[j])
            right = height[i]
            for j in range(i + 1, n):
                right = max(right, height[j])
            res += min(left, right) - height[i]
        return res


## Optimized solution that runs in O(N)
## Stores the left and right maximum values in two dp arrays.
## Space Complexity - O(N)


class Solution:
    def trap(self, height: List[int]) -> int:
        if height == []:
            return 0
        n = len(height)
        res = 0
        left = [0 for _ in range(n)]
        right = [0 for _ in range(n)]
        left[0] = height[0]
        right[n - 1] = height[n - 1]
        for i in range(1, n):
            left[i] = max(left[i - 1], height[i])
        for i in range(n - 2, -1, -1):
            right[i] = max(right[i + 1], height[i])
        for i in range(n):
            res += min(left[i], right[i]) - height[i]
        return res
