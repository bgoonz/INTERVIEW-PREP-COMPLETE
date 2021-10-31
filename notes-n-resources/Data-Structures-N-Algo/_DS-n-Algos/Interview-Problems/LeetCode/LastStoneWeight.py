class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) != 1 and len(stones) != 0:
            stones = sorted(stones)
            t = abs(stones[-1] - stones[-2])
            if t != 0:
                stones.pop()
                stones[-1] = t
            else:
                stones.pop()
                stones.pop()
        if stones:
            return stones[0]
        return 0
