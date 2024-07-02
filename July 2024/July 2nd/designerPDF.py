# There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

# Example
 

# The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

# Function Description

# Complete the designerPdfViewer function in the editor below.

# designerPdfViewer has the following parameter(s):

# int h[26]: the heights of each letter
# string word: a string
# Returns

# int: the size of the highlighted area

def designer_PDF_viewer(h, word):
    word_list = list(word)
    char_list = []

    for i in range(len(word_list)):
        item = ord(word_list[i]) - 97
        char_list.append(item)

    length = len(char_list)
    height = 0

    for i in range(len(char_list)):
        x = char_list[i]
        if h[x] > height:
            height = h[x]

    area = length * height
    print(area)

