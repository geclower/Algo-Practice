// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds

function migratoryBirds(arr) {
    let bird1 = 0
    let bird2 = 0
    let bird3 = 0
    let bird4 = 0
    let bird5 = 0
  
    for(let i=0; i<arr.length; i++){
      if(arr[i]==1){
        bird1++
      }else if(arr[i]==2){
        bird2++
      }else if(arr[i]==3){
        bird3++
      }else if(arr[i]==4){
        bird4++
      }else{
        bird5++
      }
    }
    
    let birdArr = [bird1, bird2, bird3, bird4, bird5]
  
    let maxIndex = 0
    for(let i = 1; i<birdArr.length; i++){
      if(birdArr[i]>birdArr[maxIndex]){
        maxIndex = i
      }  
    }
  
    return maxIndex +1
  }