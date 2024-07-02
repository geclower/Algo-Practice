// There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// Example
 

// The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

// Function Description

// Complete the designerPdfViewer function in the editor below.

// designerPdfViewer has the following parameter(s):

// int h[26]: the heights of each letter
// string word: a string
// Returns

// int: the size of the highlighted area

function designerPdfViewer(h, word) {
 
    let wordArray = word.split("")
    let charArray = []
    
    for(let i =0; i<wordArray.length; i++){
      let item = word.charCodeAt(i) - 97
      charArray.push(item)
    }
  
    let length = charArray.length
    let height = 0
    
    for(let i = 0; i <charArray.length; i++){
      if(h[charArray[i]]>height){
        height = h[charArray[i]]
      }
    }
    
    let area = length * height
    return area
  }