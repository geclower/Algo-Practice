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

// found following optimization, brilliant

function squares(a, b) {

    const start = Math.ceil(Math.sqrt(a));
    const end = Math.floor(Math.sqrt(b));
    return(end - start + 1);   
 
 }