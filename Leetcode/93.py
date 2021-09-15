# time: O(3^4)


class Solution:
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        res = []
        self.dfs(res, s, 0, "", 0)
        return res

    def dfs(self, res, s, secNum, sec, idx):
        if secNum > 4:
            return
        if secNum == 4 and len(sec) - 3 == len(s):
            res.append(sec)
            return
        for i in range(1, 4):
            if idx + i > len(s):
                break
            temp = s[idx : idx + i]
            if (len(temp) > 1 and temp.startswith("0")) or int(temp) > 255:
                continue
            self.dfs(
                res,
                s,
                secNum + 1,
                sec + temp if secNum == 0 else sec + "." + temp,
                idx + i,
            )
