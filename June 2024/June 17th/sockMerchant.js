// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

function sockMerchant(n, ar) {
    let pairs = 0
    let sortedAr = ar.sort((a,b)=> a-b)
  
    for(let i=0; i<sortedAr.length;i++){
      if (ar[i]==ar[i+1]){
        pairs++
        i++
      }
    }
  
    return pairs
  }