import math

def chocolate_feast(n, c, m):
    bars = 0
    wrappers = 0

    bars = math.floor(n/c)
    wrappers = bars

    while wrappers >= m:
        add = math.floor(wrappers/m)
        bars += add
        wrappers -= (add * m)
        wrappers += add

    
    return bars

print(chocolate_feast(15,3,2))