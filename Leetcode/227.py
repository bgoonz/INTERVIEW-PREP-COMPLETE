class Solution:
    def calculate(self, s: str) -> int:
        def compute(num1, num2, op):
            if op == "-":
                return num2 - num1
            if op == "+":
                return num1 + num2
            if op == "*":
                return num1 * num2
            if op == "/":
                return num2 // num1

        def precede(op1, op2):
            if op1 in {"*", "/"} and op2 in {"+", "-"}:
                return True
            return False

        nums, ops = [], []
        i = 0
        while i < len(s):
            if s[i].isdigit():
                num = 0
                while i < len(s) and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i += 1
                nums.append(num)
            else:
                if s[i] in {"+", "-", "*", "/"}:
                    while ops and not precede(s[i], ops[-1]):
                        nums.append(compute(nums.pop(), nums.pop(), ops.pop()))
                    ops.append(s[i])
                i += 1
        while ops:
            nums.append(compute(nums.pop(), nums.pop(), ops.pop()))
        return nums[-1]
