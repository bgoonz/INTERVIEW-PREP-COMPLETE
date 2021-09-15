""" Read input from STDIN. Print your output to STDOUT """
# Use input() to read input from STDIN and use print to write your output to STDOUT
import heapq


def main():
    # Write code here
    T = int(input())
    while T:
        N = int(input())
        G = list(map(int, input().split()))
        O = list(map(int, input().split()))
        heapq.heapify(G)
        heapq.heapify(O)
        c = 0
        for i in range(0, N):
            g = heapq.heappop(G)
            o = heapq.heappop(O)
            if g > o:
                c += 1
            else:
                heapq.heappush(O, o)
        print(c)
        T -= 1


main()
