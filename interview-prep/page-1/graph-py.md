# Graph (py)

```python
import Queue

class Graph(dict):
    def __init__(self, vs=[], es=[]):
        """Create a new graph. vs is a list of vertices,
        es is a list of edges"""
        for v in vs:
            self.add_vertex(v)

        for e in es:
            self.add_edge(e)

    def add_vertex(self, v):
        """ adds v to the graph. If it already is present, nothing changes
        """
        self[v] = {} if v not in self else self[v]

    def add_edge(self, e):
        """ adds e to the graph (both directions). Replaces an existing edge
        """
        # obtain the vertices
        u, v = e

        # add them to the inner dict
        self[u][v] = e
        self[v][u] = e

    def get_edge(self, u, v):
        """ returns the Edge between u and v, if it exists. None otherwise
        """
        if u in self:
            edges = self[u]
            if v in edges:
                return edges[v]
        return None

    def remove_edge(self, e):
        """ remove all references of e from the graph
        """
        # obtain the vertices
        u, v = e
        if u in self:
            edges = self[u]
            if v in edges:
                del edges[v]
                del self[v][u]

    def vertices(self):
        """ returns a list of the graph's vertices
        """
        return self.keys()

    def edges(self):
        """ returns a list of the graph's edges (no duplicates)
        """
        edges = set()
        for v, es in self.iteritems():
            for e in es.values():
                edges.add(e)
        return list(edges)

    def out_vertices(self, u):
        """ returns a list of vertices connected to u
        """
        if u in self:
            return self[u].keys()
        return []

    def out_edges(self, u):
        """ returns a list of edges that start from u
        """
        if u in self:
            return self[u].values()
        return []

    def add_all_edges(self):
        """ starts with an edgeless Graph and makes it complete by adding edges
        between all pairs of vertices
        """
        pairs = [(u, v) for u in self.vertices() for v in self.vertices()
                    if u != v]
        for p in pairs:
            self.add_edge(Edge(*p))

    def is_connected(self):
        """ does a BFS and checks if all nodes have been visited
        """
        # init
        for v in self.vertices():
            v.visited = False
        q = Queue.Queue()
        snode = self.vertices()[0]
        q.put(snode)
        snode.visited = True

        # do the BFS
        while not q.empty():
            u = q.get()
            for v in self[u].keys():
                if not v.visited:
                    q.put(v)
                    v.visited = True

        # check if all vertices have been visited
        for v in self.vertices():
            if not v.visited:
                return False
        return True



class Vertex(object):
    def __init__(self, label=''):
        self.label = label

    def __repr__(self):
        return 'Vertex(%s)' % repr(self.label)

    __str__ = __repr__

    def __eq__(self, other):
        return self.label == other.label if type(other) is Vertex else False


class Edge(tuple):
    def __new__(cls, u, v):
        return tuple.__new__(cls, (u, v))

    def __repr__(self):
        return 'Edge(%s, %s)' % (repr(self[0]), repr(self[1]))

    def vertices(self):
        return (self[0], self[1])

    __str__ = __repr__



if __name__ == '__main__':
    v = Vertex('v')
    w = Vertex('w')
    u = Vertex('u')
    e = Edge(v, w)
    e1 = Edge(u, v)
    print e
    g = Graph([u, v, w], [e])
    print g
    print g.get_edge(w, v)
    print g.get_edge(w, Vertex('lulu'))
    #g.remove_edge(e)
    print g
    print g.vertices()
    print g.edges()
    print g.out_vertices(v)
    print g.out_edges(v)
    print g
    print g.is_connected()
    g.add_all_edges()
    print g.is_connected()
```
