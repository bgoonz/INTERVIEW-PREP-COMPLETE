class Solution:
    def romanToInt(self, s: str) -> int:
        ans = 0
        prev = ""
        for i in range(len(s)):
            if s[i] == "M":
                if prev == "C":
                    ans += 800
                    prev = "M"
                    continue
                ans += 1000
                prev = "M"
                continue
            if s[i] == "D":
                if prev == "C":
                    ans += 300
                    prev = "D"
                    continue
                ans += 500
                prev = "D"
                continue
            if s[i] == "C":
                if prev == "X":
                    ans += 80
                    prev = "C"
                    continue
                ans += 100
                prev = "C"
                continue
            if s[i] == "L":
                if prev == "X":
                    ans += 30
                    prev = "L"
                    continue
                ans += 50
                prev = "L"
                continue
            if s[i] == "X":
                if prev == "I":
                    ans += 8
                    prev = "X"
                    continue
                ans += 10
                prev = "X"
                continue
            if s[i] == "V":
                if prev == "I":
                    ans += 3
                    prev = "V"
                    continue
                ans += 5
                prev = "V"
                continue
            if s[i] == "I":
                ans += 1
                prev = "I"
        return ans
