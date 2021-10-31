from collections import defaultdict
from collections import deque

## DFS
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph, visited = {}, {}
        for c in range(numCourses):
            graph[c] = set()
            visited[c] = 0
        for p in prerequisites:
            graph[p[1]].add(p[0])

        result = []
        for key in graph.keys():
            if not self.dfs(key, result, graph, visited):
                return []
        return result

    def dfs(self, curr, result, graph, visited):
        if visited[curr] == 1:
            return True
        if visited[curr] == -1:
            return False
        visited[curr] = -1
        for child in graph[curr]:
            if not self.dfs(child, result, graph, visited):
                return False
        visited[curr] = 1
        result.insert(0, curr)
        return True


## BFS
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        inDegree, tree = [0] * numCourses, defaultdict(set)
        for p in prerequisites:
            inDegree[p[0]] += 1
            tree[p[1]].add(p[0])

        queue = deque()
        for i in range(numCourses):
            if inDegree[i] == 0:
                queue.append(i)

        result = []
        while queue:
            n = queue.popleft()
            result.append(n)
            for child in tree[n]:
                inDegree[child] -= 1
                if inDegree[child] == 0:
                    queue.append(child)
        return result if len(result) == numCourses else []
