class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph, visited = {}, {}
        for i in range(numCourses):
            graph[i] = set()
            visited[i] = 0
        for p in prerequisites:
            graph[p[1]].add(p[0])
        for k in graph.keys():
            if not self.dfs(k, graph, visited):
                return False
        return True

    def dfs(self, curr, graph, visited):
        if visited[curr] == 1:
            return True
        if visited[curr] == -1:
            return False
        visited[curr] = -1
        for child in graph[curr]:
            if not self.dfs(child, graph, visited):
                return False
        visited[curr] = 1
        return True


# BFS
# from collections import defaultdict, deque
#
# class Solution:
#     def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
#         if numCourses == 0: return True
#         inDegree, tree = [0] * numCourses, defaultdict(set)
#         for p in prerequisites:
#             inDegree[p[0]] += 1
#             tree[p[1]].add(p[0])
#
#         queue = deque()
#         for i in range(numCourses):
#             if inDegree[i] == 0:
#                 queue.append(i)
#
#         while queue:
#             numCourses -= 1
#             n = queue.popleft()
#             for child in tree[n]:
#                 inDegree[child] -= 1
#                 if inDegree[child] == 0:
#                     queue.append(child)
#         return numCourses == 0
