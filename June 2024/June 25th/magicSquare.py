# We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

# You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

# Note: The resulting magic square must contain distinct integers in the inclusive range .

# Example

# $s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

# The matrix looks like this:

# 5 3 4
# 1 5 8
# 6 4 2
# We can convert it to the following magic square:

# 8 3 4
# 1 5 9
# 6 7 2
# This took three replacements at a cost of .

# Function Description

# Complete the formingMagicSquare function in the editor below.

# formingMagicSquare has the following parameter(s):

# int s[3][3]: a  array of integers
# Returns

# int: the minimal total cost of converting the input square to a magic square