def is_leap(year):
    if (year % 4 != 0) or (year % 100 == 0 and year % 400 != 0):
        leap = False
    else:
        leap = True
    return leap
