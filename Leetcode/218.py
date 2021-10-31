import heapq


class Solution:
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """
        rectangles = [[l, -h, r] for l, r, h in buildings] + [
            [r, h, None] for l, r, h in buildings
        ]
        rectangles.sort()
        result = []
        heap = [(0, float("inf"))]
        for l, h, r in rectangles:
            top = heap[0][0]
            while l >= heap[0][1]:
                heapq.heappop(heap)
            if h < 0:
                heapq.heappush(heap, (h, r))
            if top != heap[0][0]:
                result.append([l, -heap[0][0]])
        return result
