def beautiful_triplets(d, lst):
    answer = 0

    for x in range(len(lst)):
        for y in range(len(lst)):
            if lst[y]-lst[x] == d:
                for z in range(len(lst)):
                    if lst[z] - lst[y]== d:
                        answer += 1
    
    return answer

print(beautiful_triplets(3, [1, 2, 4, 5, 7, 8, 10]))