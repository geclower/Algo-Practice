// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example


// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion

function pickingNumbers(ar) {
    let numArr = []
    let final = 1
  
    for(let i = 0; i<ar.length; i++){
      for(let j = 0; j<ar.length; j++){
        if(ar[i]-ar[j]==1||ar[i]==ar[j]){
          numArr.push(ar[j])
        }
      }
      console.log(numArr)
      if(numArr.length>final){
        final = numArr.length
      }
      numArr = []
    }
    return final
  }