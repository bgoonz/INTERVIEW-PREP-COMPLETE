class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        d = {
            "1": "",
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        result = []
        for digit in digits:
            if not result:
                for i in d[digit]:
                    result.append(i)
            else:
                temp = []
                for i in range(len(result)):
                    for c in d[digit]:
                        temp.append(result[i] + c)
                result = temp
        return result


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        d = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        result = [""]
        for digit in digits:
            temp = [r + c for c in d[digit] for r in result]
            result = temp
        return result
