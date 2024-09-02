function equalizeArray(arr) {
    let total = 1  
    let largestTotal = 1
    let sortedArr = arr.sort((a,b)=> a-b)
      console.log(sortedArr)
    
    for(let i = 0; i<arr.length; i++){
      if(sortedArr[i]==sortedArr[i+1]){
        total++
      }else{
        total = 1
      }
      if(total > largestTotal){
        largestTotal = total
      }
    }
      
    let answer = arr.length - largestTotal
    return answer
    }