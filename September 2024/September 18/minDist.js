function minimumDistances(a) {
    let answer = a.length
    let temp = 0
  
    for(let i = 0; i<a.length; i++){
      for(let j = i+1; j<a.length; j++){
        if(a[i] === a[j]){
          temp = j - i
          if(temp < answer){
            answer = temp
            temp = 0
          }
        }
      }
    }
    
    if(answer == a.length){
      return -1
    }else{
      return answer
    }
  }