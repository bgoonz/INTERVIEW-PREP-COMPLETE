class Solution:
    def canCompleteCircuit(self, gas, cost):
        """
        :type gas: List[int]
        :type cost: List[int]
        :rtype: int
        """
        start, total, tank = 0, 0, 0
        for i in range(len(gas)):
            curr = gas[i] - cost[i]
            tank += curr
            total += curr
            if tank < 0:
                tank = 0
                start = i + 1
        return -1 if total < 0 else start
