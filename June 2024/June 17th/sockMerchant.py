# There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# Example


# There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

# Function Description

# Complete the sockMerchant function in the editor below.

# sockMerchant has the following parameter(s):

# int n: the number of socks in the pile
# int ar[n]: the colors of each sock
# Returns

# int: the number of pairs

def sockMerchant(n, ar):
  pairs = 0
  sorted_ar = sorted(ar)

  i=0
  while i< len(sorted_ar) - 1:
    if sorted_ar[i]==sorted_ar[i+1]:
      pairs+=1
      i+=2
    else:
      i+=1
    
  return pairs
