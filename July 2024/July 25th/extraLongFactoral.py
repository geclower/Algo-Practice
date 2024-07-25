def extra_long_factoral(n):
    answer = n
    x = n -1

    while x > 0:
        answer *= x
        x-= 1
    
    print(str(answer))

extra_long_factoral(45)