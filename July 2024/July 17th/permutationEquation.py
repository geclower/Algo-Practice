def permutation_equation(p):
    result = []
    x = 1
    temp = 0

    while x <= len(p):
        for i in range(len(p)):
            if p[i] == x:
                temp = i+1
                for j in range(len(p)):
                    if p[j] == temp:
                        result.append(j+1)
        x += 1

    return result

print(permutation_equation([4,3,5,1,2]))