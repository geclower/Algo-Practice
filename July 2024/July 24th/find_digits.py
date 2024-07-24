# An integer  is a divisor of an integer  if the remainder of .

# Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

# Example

# Check whether ,  and  are divisors of . All 3 numbers divide evenly into  so return .


# Check whether , , and  are divisors of . All 3 numbers divide evenly into  so return .


# Check whether  and  are divisors of .  is, but  is not. Return .

# Function Description

# Complete the findDigits function in the editor below.

# findDigits has the following parameter(s):

# int n: the value to analyze
# Returns

# int: the number of digits in  that are divisors of 

def findDigits(n):
    result = 0
    strng = str(n)
    lst = list(strng)

    for i in range(len(lst)):
        mod = n % int(lst[i])
        if mod == 0:
            result+=1
    
    return result

print(findDigits(12))