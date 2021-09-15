class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        denom = {5: 0, 10: 0, 20: 0}
        for i in range(len(bills)):
            denom[bills[i]] += 1
            if bills[i] > 5:
                bal = bills[i] - 5
                if bal % 5 == 0 and bal % 10 != 0:
                    if denom[5] > 0:
                        denom[5] -= 1
                        bal -= 5
                        if bal == 0:
                            continue
                if bal % 10 == 0 and bal % 20 != 0:
                    if denom[10] > 0:
                        denom[10] -= 1
                        bal -= 10
                        if bal == 0:
                            continue
                if denom[5] > 1:
                    denom[5] -= 2
                    bal -= 10
                    if bal == 0:
                        continue
                if bal > 0:
                    return False
        return True
