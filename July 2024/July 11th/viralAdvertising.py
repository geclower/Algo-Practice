# HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly  people on social media.

# On the first day, half of those  people (i.e., ) like the advertisement and each shares it with  of their friends. At the beginning of the second day,  people receive the advertisement.

# Each day,  of the recipients like the advertisement and will share it with  friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day .

# Example
# .

# Day Shared Liked Cumulative
# 1      5     2       2
# 2      6     3       5
# 3      9     4       9
# 4     12     6      15
# 5     18     9      24
# The progression is shown above. The cumulative number of likes on the  day is .

# Function Description

# Complete the viralAdvertising function in the editor below.

# viralAdvertising has the following parameter(s):

# int n: the day number to report
# Returns

# int: the cumulative likes at that day

import math

def viralAdvertising(n):
    likes = 0
    shared = 5
    i = 1

    while i<=n:
        likes += math.floor(shared/2)
        shared = math.floor(shared/2)*3
        i += 1
    
    return likes

print(viralAdvertising(3))