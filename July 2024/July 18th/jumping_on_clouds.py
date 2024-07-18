def jumping_on_clouds(cloud_list, jump):
    e = 99

    if cloud_list[0]==1:
        e -= 2
    
    i = jump
    while i != 0:
        if i >= len(cloud_list):
            i -= len(cloud_list)
        if i == 0:
            break
        if cloud_list[i]==1:
            e-=2
        e-=1
        i+=jump
    return e

print(jumping_on_clouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))