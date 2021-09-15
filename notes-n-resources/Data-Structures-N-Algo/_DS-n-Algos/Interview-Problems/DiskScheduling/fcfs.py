thm = int(0)
print("Enter the Number of Requests : ")  # Number of I/O Requests
req = int(input())
print("Enter the Initial Head Position : ")  # Initial Position of Disk Head
hp = int(input())
print("Enter the Seek Rate : ")
srate = int(input())
print("Enter the Requests : ")
arr = [int(input()) for i in range(req)]
thm = thm + abs(hp - arr[0])
print(str(hp) + " -> " + str(arr[0]), end="")
for i in range(1, req):  # Iterates in Order of Arrival
    thm = thm + abs(arr[i] - arr[i - 1])
    print(" -> " + str(arr[i]), end="")
stime = srate * thm
print("\nThe Total Head Movement is", thm)
print("The Seek Time is", stime)
