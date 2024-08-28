def jumping_on_clouds(c):
    answer = 0
    i = 0
    while i < (len(c)-1):
        if c[i+2] == 0:
            answer+=1
            i+=2
        else:
            answer+=1
            i+=1
    return answer

print(jumping_on_clouds([0, 0, 0, 0, 1, 0]))