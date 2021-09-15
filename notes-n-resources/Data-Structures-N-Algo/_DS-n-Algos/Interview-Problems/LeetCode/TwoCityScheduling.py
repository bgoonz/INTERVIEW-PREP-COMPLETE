class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        costs = sorted(costs, key=lambda x: x[0] - x[1])
        return sum(i[0] for i in costs[0 : len(costs) // 2]) + sum(
            j[1] for j in costs[len(costs) // 2 : len(costs)]
        )
