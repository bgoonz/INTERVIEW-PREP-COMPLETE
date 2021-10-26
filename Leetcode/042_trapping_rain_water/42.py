class Solution:
    def trap(self, height: "List[int]") -> "int":
        result = 0
        stack = []
        for i in range(len(height)):
            while stack and height[i] > height[stack[-1]]:
                pre = stack.pop()
                if stack:
                    h = min(height[stack[-1]], height[i])
                    result += (h - height[pre]) * (i - 1 - stack[-1])
            stack.append(i)
        return result
