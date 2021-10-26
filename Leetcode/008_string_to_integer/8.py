class Solution(object):
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        MAX, MIN = 2147483647, -2147483648
        if str == "":
            return 0
        str = str.strip()  # remove white space
        base, sign, index = 0, 1, 0
        if str[index] == "-" or str[index] == "+":
            sign = -1 if str[index] == "-" else 1
            index += 1
        while index < len(str) and str[index] >= "0" and str[index] <= "9":
            if base > MAX / 10 or (base == MAX / 10 and int(str[index]) > 7):
                return MAX if sign == 1 else MIN
            base = base * 10 + int(str[index])
            index += 1
        return sign * base
