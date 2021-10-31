# Enter your code here. Read input from STDIN. Print output to STDOUT
s = input()
print(
    *sorted(s, key=lambda x: (x in "02468", x.isdigit(), x.isupper(), x.islower(), x)),
    sep=""
)
