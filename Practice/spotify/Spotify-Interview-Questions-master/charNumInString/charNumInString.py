# Given a string, find the letter that appears the most often in the string
string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

input = open("string.txt", "r")

i = 97
letter = chr(i)
count = 0
bigLetter = ""
bigAmmount = 0

while letter != chr(123):
    count = string.count(letter)
    print(letter + ": " + str(count))
    if count > bigAmmount:
        bigAmmount = count
        bigLetter = letter
    count = 0
    i += 1
    letter = chr(i)
print("\nLetter: " + str(bigLetter) + "; Ammount: " + str(bigAmmount))
