from operator import itemgetter

if __name__ == "__main__":
    students = []
    res = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    students = sorted(students, key=itemgetter(1))
    maxg = students[0][1]
    for i in range(len(students)):
        if students[i][1] > maxg:
            maxg = students[i][1]
            break
    for i in range(len(students)):
        if maxg == students[i][1]:
            res.append(students[i][0])
    for i in sorted(res):
        print(i)
