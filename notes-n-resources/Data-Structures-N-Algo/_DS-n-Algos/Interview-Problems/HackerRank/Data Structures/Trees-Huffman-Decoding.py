"""class Node:
    def __init__(self, freq,data):
        self.freq= freq
        self.data=data
        self.left = None
        self.right = None
"""

# Enter your code here. Read input from STDIN. Print output to STDOUT
def decodeHuff(root, s):
    ans = ""
    current = root
    # Enter Your Code Here
    for i in range(0, len(s)):
        if s[i] == "0":
            current = current.left
        else:
            current = current.right
        if current.left == None and current.right == None:
            ans += current.data
            current = root
    print(ans)
