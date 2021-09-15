class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []
        if len(intervals) < 2:
            return intervals
        intervals = sorted(intervals, key=lambda x: x[0])
        stack = []
        for interval in intervals:
            if stack and stack[-1][1] >= interval[0]:
                stack[-1][1] = max(stack[-1][1], interval[1])
                continue
            stack.append(interval)
        return stack
