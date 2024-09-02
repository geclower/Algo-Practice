def equilize_list(lst):
    total = 1
    largest_total = 1
    sorted_lst = sorted(lst)

    i = 0

    for x in range(len(lst)-1):
        if sorted_lst[i] == sorted_lst[i+1]:
            total+=1
        else:
            total = 1
        if total > largest_total:
            largest_total = total
        i+=1

    answer = len(lst) - largest_total
    return answer

print(equilize_list([3, 3, 2, 1, 3]))