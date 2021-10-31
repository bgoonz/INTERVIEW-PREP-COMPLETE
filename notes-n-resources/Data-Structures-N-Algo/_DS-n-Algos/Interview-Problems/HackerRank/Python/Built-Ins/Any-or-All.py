# Enter your code here. Read input from STDIN. Print output to STDOUT
# Solution by defining isPalindrome()
def isPalindrome(num):
    num = str(num)
    front = len(num) - 1
    rear = 0
    while rear <= front:
        if not num[front] == num[rear]:
            return False
        rear += 1
        front -= 1
    return True


n = int(input())
nums = list(map(int, input().split()))
print(
    "True"
    if all(x >= 0 for x in nums) and any(isPalindrome(x) for x in nums)
    else "False"
)

# More Concise Solution using string reversal
# Enter your code here. Read input from STDIN. Print output to STDOUT
def isPalindrome(num):
    num = str(num)
    return True if num == num[::-1] else False


n = int(input())
nums = list(map(int, input().split()))
print(
    "True"
    if all(x >= 0 for x in nums) and any(isPalindrome(x) for x in nums)
    else "False"
)
