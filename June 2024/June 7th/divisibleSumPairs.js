// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example



// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

function divisibleSumPairs(n, k, ar) {
    let sumPairs = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((ar[i] + ar[j]) % k == 0) {
          sumPairs++;
        }
      }
    }
  
    return sumPairs;
  }