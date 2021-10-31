# from collections import deque


class Solution:
    def simplifyPath(self, path: str) -> str:
        if len(path) == 0 or path == None or path == "":
            return "/"

        p = path.split("/")
        stack = []
        for item in p:
            if item == "..":
                if stack:
                    stack.pop()
                continue
            if item == "." or len(item) == 0:
                pass
            else:
                stack.append(item)
        return "/" + "/".join(stack)
