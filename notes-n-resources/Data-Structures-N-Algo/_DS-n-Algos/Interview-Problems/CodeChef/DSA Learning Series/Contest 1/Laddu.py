from sys import stdin, stdout


def laddus(n, origin, activities):
    score = 0
    for i in range(n):
        if "TOP_CONTRIBUTOR" in activities[i]:
            score += 300
        elif "CONTEST_HOSTED" in activities[i]:
            score += 50
        elif "CONTEST_WON" in activities[i]:
            rank = int(activities[i].split()[1])
            if rank > 20:
                score += 300
            else:
                score += 300 + 20 - rank
        else:
            bugscore = int(activities[i].split()[1])
            score += bugscore
    if origin == "INDIAN":
        return score // 200
    else:
        return score // 400


for _ in range(int(stdin.readline())):
    n, origin = stdin.readline().split()
    n = int(n)
    activities = []
    for _ in range(n):
        activities.append(stdin.readline())
    stdout.write(str(laddus(n, origin, activities)) + "\n")
