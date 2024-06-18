// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:

// image

// When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .

// Example



// Untitled Diagram(4).png

// Using the diagram above, if the student wants to get to page , they open the book to page , flip  page and they are on the correct page. If they open the book to the last page, page , they turn  page and are at the correct page. Return .

// Function Description

// Complete the pageCount function in the editor below.

// pageCount has the following parameter(s):

// int n: the number of pages in the book
// int p: the page number to turn to
// Returns

// int: the minimum number of pages to turn

function pageCount(n, p) {
    let frontTurns = 0
    let backTurns = 0
  
    for(let i = 1; i < n; i++){
      if(i == p){
        break
      }
      
      if(i%2 != 0){
        frontTurns++
      }
    }
  
    for(let i = n; i >= 0; i--){
      if(i == p){
        break
      }
      
      if(i%2 ==0){
        backTurns++
      }
  
    }
    
    if(frontTurns<=backTurns){
      return frontTurns
    }else{
      return backTurns
    }
  }