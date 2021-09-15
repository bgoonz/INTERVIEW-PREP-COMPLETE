class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""
        end_index = 0
        for group in zip(*strs):
            if len(set(group)) > 1:
                return strs[0][:end_index]
            end_index += 1
        return strs[0][:end_index]
