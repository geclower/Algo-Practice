function cutTheSticks(arr) {
    let answer = [];
    let sortArr = arr.sort((a, b) => a - b);
  
  
    while(sortArr.length){ 
      let length = sortArr[0]
      answer.push(sortArr.length);
      for (let i = 0; i < sortArr.length; i++) {
        sortArr[i] = sortArr[i] - length;
      }
      for (let i=0; i<sortArr.length; i++){
        if(sortArr[i]===0){
          sortArr.splice(i,1)
          i--
        }
      }
      
    }
    
    return answer;
  }