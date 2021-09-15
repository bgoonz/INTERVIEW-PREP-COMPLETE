# Reorganize the Array

# Given an array of elements of length N, ranging from 0 to N-1,
# your task is to write a program that rearranges the elements of the array. 
# All elements may not be present in the array, if element is not present,
# then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present,
# display -1 at that place.

T = int(input())

while(T>0):
    N = int(input())
    A = [int(x) for x in input().split()]
    S = set()
    for i in range(0, len(A)):
        S.add(A[i])
    for i in range(0, len(A)):
        if i in S:
            A[i] = i
        else:
            A[i] = -1
    for i in range(0, len(A)-1):
        print(A[i], end=' ')
    print(A[-1])
    T-=1