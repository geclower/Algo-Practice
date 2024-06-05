// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example


// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets


function getTotalX(a, b) {
    let result = 0
    let sortedA = a.sort()
    let sortedB = b.sort()
    let min = sortedA[a.length-1]
    let max = sortedB[0]
    let c = []

    for(let i = min; i<=max; i++){
      let check = 0
      for(let j = 0; j<a.length; j++){
        if(i%a[j]===0){
          check ++
          if (check==a.length){
            c.push(i)
            check = 0
          }
        }
      }
    }

    for(let i=0; i<c.length;i++){
      let check = 0
      for(let j = 0; j<b.length; j++){
        if(b[j]%c[i]==0){
          check ++
          if(check==b.length){
            result++
            check = 0
          }
        }
      }
    }

    return result
  }

  console.log(getTotalX([2, 4], [16, 32, 96]))

  // [2, 4], [16, 32, 96]