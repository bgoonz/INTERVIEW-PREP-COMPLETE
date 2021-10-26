"""
Python Trick
"""


class Solution(object):
    def isNumber(self, s):
        """
        :type s: str
        :rtype: bool
        """
        try:
            new_num = float(s)
        except:
            return False
        return True


"""
DFA
"""


class Solution:
    def isNumber(self, s: str) -> bool:
        states = [
            {"blank": 0, "digit": 1, "sign": 2, "dot": 3},
            {"digit": 1, "dot": 4, "e": 5, "blank": 8},
            {"digit": 1, "dot": 3},
            {"digit": 4},
            {"digit": 4, "e": 5, "blank": 8},
            {"sign": 6, "digit": 7},
            {"digit": 7},
            {"digit": 7, "blank": 8},
            {"blank": 8},
        ]
        state = 0
        for c in s:
            if c.isdigit() and "0" <= c <= "9":
                key = "digit"
            elif c in {"-", "+"}:
                key = "sign"
            elif c == ".":
                key = "dot"
            elif c == "e":
                key = "e"
            elif c == " ":
                key = "blank"
            else:
                return False
            if key not in states[state]:
                return False
            state = states[state][key]
        return True if state in {1, 4, 7, 8} else False
