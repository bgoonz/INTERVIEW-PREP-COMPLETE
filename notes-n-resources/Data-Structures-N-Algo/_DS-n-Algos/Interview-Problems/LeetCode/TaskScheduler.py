class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        tasksDict = collections.Counter(tasks)
        heap = []
        c = 0
        for k, v in tasksDict.items():
            heappush(heap, (-v, k))
        while heap:
            i = 0
            stack = []
            while i <= n:
                if len(heap) > 0:
                    index, task = heappop(heap)
                    if index != -1:
                        stack.append((index + 1, task))
                c += 1
                if len(heap) == 0 and len(stack) == 0:
                    break
                i += 1
            for i in stack:
                heappush(heap, i)
        return c
