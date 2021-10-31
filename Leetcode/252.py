class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals = sorted(intervals, key=lambda x: x[1])
        end = -1
        for interval in intervals:
            if interval[0] >= end:
                end = interval[1]
                continue
            return False
        return True
