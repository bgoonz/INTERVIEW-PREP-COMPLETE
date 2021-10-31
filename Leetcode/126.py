import string
from collections import defaultdict


class Solution:
    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:
        wordList = set(wordList)
        if endWord not in wordList:
            return 0
        q = {beginWord}
        wordList -= q
        tree = defaultdict(set)
        found = False

        while q:
            temp = set()
            for word in q:
                for i in range(len(word)):
                    for c in string.ascii_lowercase:
                        new_word = word[:i] + c + word[i + 1 :]
                        if new_word == endWord:
                            found = True
                        if new_word in wordList:
                            tree[word].add(new_word)
                            temp.add(new_word)
            if found:
                break
            q = temp
            wordList -= temp

        result = []
        self.backtrack(beginWord, endWord, tree, [beginWord], result)
        return result

    def backtrack(self, beginWord, endWord, tree, path, result):
        if beginWord == endWord:
            result.append(path)
        else:
            for word in tree[beginWord]:
                self.backtrack(word, endWord, tree, path + [word], result)
