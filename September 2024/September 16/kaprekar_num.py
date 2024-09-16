import math

def kaprekar_numbers(p, q):
    answer = ""
    while p <= q:
        if is_kaprekar(p):
            answer = answer + p + ""
        p+=1
        
    if len(answer)>0:
        print(answer)
    else:
        print("INVALID RANGE")

def is_kaprekar(num):
    if num == 1:
        return True
    
    sq_num = str(num*num)
    length = math.floor(len(sq_num)/2)
    x = slice(0, length)
    y = slice(length)
    
    total = int(sq_num[x]) + int(sq_num[y])

    if total == num