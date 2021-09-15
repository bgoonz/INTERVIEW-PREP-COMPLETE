class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        result, curr = 0, 0
        for i, val in sorted(
            x for interval in intervals for x in [(interval[0], 1), (interval[1], -1)]
        ):
            curr += val
            result = max(curr, result)
        return result


# import heapq
#
#
# class Solution:
#     def minMeetingRooms(self, intervals: List[List[int]]) -> int:
#         if not intervals: return 0
#         q = []
#         for interval in sorted(intervals, key=lambda x: x[0]):
#             if not q:
#                 heapq.heappush(q, interval[1])
#             else:
#                 if interval[0] >= q[0]:
#                     heapq.heappop(q)
#                 heapq.heappush(q, interval[1])
#         return len(q)
