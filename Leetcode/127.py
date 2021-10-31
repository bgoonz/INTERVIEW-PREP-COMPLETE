import string
from typing import List


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordList = set(wordList)
        if not wordList or endWord not in wordList:
            return 0
        wordList.discard(beginWord)
        q1, q2 = {beginWord}, {endWord}
        step = 1

        while q1 and q2:
            temp = set()
            for word in q1:
                for i in range(len(word)):
                    for c in string.ascii_lowercase:
                        new_word = word[:i] + c + word[i + 1 :]
                        if new_word in q2:
                            return step + 1
                        if new_word in wordList:
                            temp.add(new_word)
            wordList -= temp
            step += 1
            q1 = temp
            if len(q1) > len(q2):
                q1, q2 = q2, q1
        return 0
