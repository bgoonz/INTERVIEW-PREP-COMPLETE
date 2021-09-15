def bfs(g, N):
    queue = []
    visited = [False] * (N)
    bfs = []
    queue.append(0)
    visited[0] = True
    while queue:
        cur = queue.pop(0)
        bfs.append(cur)
        for neighbour in g[cur]:
            if not visited[neighbour]:
                queue.append(neighbour)
                visited[neighbour] = True
    return bfs
