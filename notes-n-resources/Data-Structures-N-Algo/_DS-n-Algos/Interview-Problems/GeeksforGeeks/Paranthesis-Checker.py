for _ in range(int(input())):
    p = input()
    stack = []
    isBalanced = True
    for i in p:
        if i == "{":
            stack.append("}")
        elif i == "[":
            stack.append("]")
        elif i == "(":
            stack.append(")")
        else:
            if stack and i == stack.pop():
                continue
            else:
                isBalanced = False
                break
    if not isBalanced or stack:
        print("not balanced")
    else:
        print("balanced")
