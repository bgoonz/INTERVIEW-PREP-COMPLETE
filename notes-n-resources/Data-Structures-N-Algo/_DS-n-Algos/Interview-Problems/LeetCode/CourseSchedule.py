from collections import deque


class Solution:
    def canFinish(self, numCourses, prerequisites) -> bool:
        adjList = [[] for _ in range(numCourses)]
        inDegree = [0 for _ in range(numCourses)]
        queue = deque()
        visited = 0
        for i in range(len(prerequisites)):
            adjList[prerequisites[i][0]].append(prerequisites[i][1])
        for i in range(numCourses):
            for j in adjList[i]:
                inDegree[j] += 1
        for i in range(len(inDegree)):
            if inDegree[i] == 0:
                queue.append(i)
        while queue:
            el = queue.popleft()
            for i in adjList[el]:
                inDegree[i] -= 1
                if inDegree[i] == 0:
                    queue.append(i)
            visited += 1
        if visited == numCourses:
            return True
        else:
            return False
