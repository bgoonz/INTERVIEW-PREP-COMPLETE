class Solution(object):
    def isStrobogrammatic(self, num):
        """
        :type num: str
        :rtype: bool
        """
        mapping = {"6": "9", "8": "8", "1": "1", "9": "6", "0": "0"}
        l, r = 0, len(num) - 1
        while l <= r:
            if num[l] not in mapping or num[r] not in mapping:
                return False
            if num[l] != mapping[num[r]]:
                return False
            l += 1
            r -= 1
        return True
