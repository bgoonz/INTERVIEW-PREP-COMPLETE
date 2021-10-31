# Stack implementation using Array in Python
# Stack Methods : push, pop, peek, isEmpty

from sys import maxsize


def initializeStack():
    stack = []
    return stack


def isEmpty(stack):
    if len(stack) == 0:
        return True
    else:
        return False


def pop(stack):
    if isEmpty(stack):
        return str(-maxsize - 1)
    return stack.pop()


def push(item, stack):
    stack.append(item)
    print(str(item) + " pushed into stack")


def peek(stack):
    if isEmpty(stack):
        return str(-maxsize - 1)
    return stack[len(stack) - 1]


# Driver code to test the functions
stack = initializeStack()
push(3, stack)
push(4, stack)
push(5, stack)
print(peek(stack))
print(pop(stack))
