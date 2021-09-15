from heapq import *

r, thm = int(0), int(0)
print("Enter the Number of Requests : ") #Number of I/O Requets
req = int(input())
print("Enter the Initial Head Position : ") #Initial position of Disk Head
hp = int(input())
position = hp
print("Enter the Seek Rate : ")
srate = int(input())
print("Enter the Requests : ")
arr = [ int(input()) for i in range(req)]
heap = []
n = len(arr)
print(hp, end='')
while len(arr) > 0:
    for r in arr:
        heappush(heap, [abs(position-r),r]) #Stores the distance to location and correspoding location
    x=heappop(heap)[1] #Pops the lowest distance's corresponding location
    thm+=abs(position-x)
    position=x
    print(" -> ",x, end='')
    arr.remove(x) #Removes the location, since the request has been satisfied
    heap = []
stime=thm*srate
print("\nThe Total Head Movement is",thm)
print("The Seek Time is",stime)
