def beautifulDays(firstDay, lastDay, k):
    beauDays = 0
    i = firstDay
    while i <= lastDay:
        numStr = str(i)
        dayList = list(numStr)
        dayList.reverse()
        convertedList = map(str, dayList)
        daySwap = ''.join(convertedList)

        if (i - int(daySwap))%k == 0:
            beauDays += 1

        i += 1

    return beauDays

print(beautifulDays(20,23,6))