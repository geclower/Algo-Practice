# Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

# Example


# There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

# Function Description

# Complete the pickingNumbers function in the editor below.

# pickingNumbers has the following parameter(s):

# int a[n]: an array of integers
# Returns

# int: the length of the longest subarray that meets the criterion

def pickingNumbers(list):
  num_list = []
  final = 0
  list_length = len(list)

  for i in range(list_length):
    for j in range(list_length):
      if list[i]-list[j] == 1 or list[i] == list[j]:
        num_list.append(list[j])
    if len(num_list) > final:
      final = len(num_list)
    num_list = []
  
  print(final)

pickingNumbers([1, 2, 2, 3, 1, 2])