n = int(input())
prices = []
for i in range(n):
    prices.append(int(input()))
prices.sort()
mx = -1
for i in range(n):
    profit = prices[i] * (len(prices) - i)
    if profit > mx:
        mx = profit
print(mx)
