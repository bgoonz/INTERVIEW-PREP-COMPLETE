class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        def deleteBackSpace(X):
            stack = []
            for i in X:
                if not i == "#":
                    stack.append(i)
                elif len(stack) == 0:
                    continue
                else:
                    stack.pop()
            return stack

        return deleteBackSpace(S) == deleteBackSpace(T)
