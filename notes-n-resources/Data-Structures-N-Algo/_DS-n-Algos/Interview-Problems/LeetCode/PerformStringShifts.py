class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        amount = 0
        for i in range(len(shift)):
            if shift[i][0] == 0:
                amount += (-1) * shift[i][1]
            else:
                amount += 1 * shift[i][1]
        print(amount)
        if amount == 0:
            return s
        elif amount < 0:
            return s[(abs(amount) % len(s)) :] + s[0 : (abs(amount) % len(s))]
        else:
            return s[len(s) - (amount % len(s)) :] + s[0 : len(s) - (amount % len(s))]
