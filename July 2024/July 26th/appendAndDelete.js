// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// Append a lowercase English letter to the end of the string.
// Delete the last character of the string. Performing this operation on an empty string results in an empty string.
// Given an integer, , and two strings,  and , determine whether or not you can convert  to  by performing exactly  of the above operations on . If it's possible, print Yes. Otherwise, print No.

// Example. 


// To convert  to , we first delete all of the characters in  moves. Next we add each of the characters of  in order. On the  move, you will have the matching string. Return Yes.

// If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string. If there were fewer than  moves, we would not have succeeded in creating the new string.

// Function Description

// Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

// appendAndDelete has the following parameter(s):

// string s: the initial string
// string t: the desired string
// int k: the exact number of operations that must be performed
// Returns

// string: either Yes or No

function appendAndDelete(str1, str2, k) {
    let newStr1 = str1
    let newStr2 = str2
    let x = 0;
    
    
    while (newStr1 !== newStr2) {
      if (newStr1.length == 0) {
        break;
      }
      if (newStr1.length == newStr2.length) {
        newStr2 = newStr2.slice(0, -1);
      }
      newStr1 = newStr1.slice(0, -1);
      x++;
    }
    console.log(newStr1, newStr2, x)
    
    if(str1.length >= str2.length){
      if (x == k && newStr1.length == str2.length) {
        return "Yes";
      } else if (k - x >= str2.length-newStr2.length) {
        return "Yes";
      } else {
        return "No";
      }
    }else{
      if(x>=k){
        return "Yes"
      }else{
        return "No"
      }
    }
  
  }
  