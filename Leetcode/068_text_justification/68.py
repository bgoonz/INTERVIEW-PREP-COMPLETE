from typing import List


class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        curr, num_of_chars, result = [], 0, []
        for word in words:
            # len(curr) represent the number of spaces following total words
            if len(curr) + num_of_chars + len(word) > maxWidth:
                for i in range(maxWidth - num_of_chars):
                    curr[i % (len(curr) - 1 or 1)] += " "
                result.append("".join(curr))
                curr = []
                num_of_chars = 0
            curr.append(word)
            num_of_chars += len(word)
        if curr:
            result.append(" ".join(curr).ljust(maxWidth))
        return result
