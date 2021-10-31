class Solution:
    def minCost(self, costs):
        """
        :type costs: List[List[int]]
        :rtype: int
        """
        prev = [0] * 3
        for cost in costs:
            prev = [cost[i] + min(prev[:i] + prev[i + 1 :]) for i in range(3)]
        return min(prev)
