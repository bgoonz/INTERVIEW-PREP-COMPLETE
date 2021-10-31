# code
"""
Given an input stream of N integers. The task is to insert these numbers into a new stream and find the median of the stream formed by each insertion of X to the new stream.

Input:
The first line of input contains an integer N denoting the number of elements in the stream. Then the next N lines contains integer x denoting the number to be inserted into the stream.
Output:
For each element added to the stream print the floor of the new median in a new line.
 
Constraints:
1 <= N <= 106
1 <= x <= 106
 
Example:
Input:
4
5
15
1 
3
Output:
5
10
5
4
"""
# Solution

import heapq


def balance(minh, maxh):
    while abs(len(minh) - len(maxh)) > 1:
        if len(minh) > len(maxh):
            heapq.heappush(maxh, -heapq.heappop(minh))
        else:
            heapq.heappush(minh, -heapq.heappop(maxh))


def main():
    N = int(input())
    i = int(input())
    minh = []
    maxh = [-i]
    print(i)
    for _ in range(N - 1):
        inp = int(input())
        if inp < (-1 * maxh[0]):
            heapq.heappush(maxh, -1 * inp)
        else:
            heapq.heappush(minh, inp)
        balance(minh, maxh)
        if len(minh) > len(maxh):
            print(minh[0])
        elif len(maxh) > len(minh):
            print(-maxh[0])
        else:
            print((minh[0] - maxh[0]) // 2)


main()
