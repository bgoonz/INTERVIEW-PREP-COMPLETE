import math


class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        if n <= 2:
            return n
        result = 0
        for i in range(n):
            curmax = 0
            overlap = 0
            d = dict()
            for j in range(i + 1, n):
                dy, dx = points[j][1] - points[i][1], points[j][0] - points[i][0]
                if dx == 0 and dy == 0:
                    overlap += 1
                    continue
                gcd = math.gcd(dx, dy)
                dx /= gcd
                dy /= gcd
                if dy < 0 and (dx < 0 or dx > 0):
                    dy *= -1
                    dx *= -1
                if dy == 0:
                    dx = 1
                if dx == 0:
                    dy = 1
                d[(dx, dy)] = d.get((dx, dy), 0) + 1
                curmax = max(curmax, d[(dx, dy)])
            result = max(result, curmax + overlap + 1)
        return result
