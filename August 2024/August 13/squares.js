function squares(a, b) {
    let answer = 0
  
    for(let i = a; i <= b; i++){
      if(Math.sqrt(i) % 1 === 0 ){
        answer++
      }
    }
    
    return answer
  }

  
//   not ideal for multiple large number spans at once. may come back later and optimize