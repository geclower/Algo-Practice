def minimum_distance(a):
    answer = len(a)
    temp = 0

    for x in range(len(a)):
        for y in range(len(a)):
            if (a[x] == a[y]) and (x!=y) and (y >x):
                temp = y-x
                print(temp)
                if temp < answer:
                    answer = temp
                    temp = 0
    
    if answer == len(a):
        return -1
    else:
        return answer
    
print(minimum_distance([7, 1, 3, 4, 1, 7]))