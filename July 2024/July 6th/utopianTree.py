# The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

# A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

# For example, if the number of growth cycles is , the calculations are as follows:

# Period  Height
# 0          1
# 1          2
# 2          3
# 3          6
# 4          7
# 5          14
# Function Description

# Complete the utopianTree function in the editor below.

# utopianTree has the following parameter(s):

# int n: the number of growth cycles to simulate
# Returns

# int: the height of the tree after the given number of cycles

def utopianTree(n):
    tree = 1
    i = 1

    while i<=n:
        if i%2 ==0:
            tree += 1
        if i%2 != 0:
            tree *= 2
        i += 1
    
    return tree

print(utopianTree(4))