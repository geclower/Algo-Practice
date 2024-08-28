function jumpingOnClouds(c) {
    let answer = 0;
    let i = 0
    while(i<c.length-1){
      if(c[i+2]==0){
        answer++
        i+=2
      }else{
        answer++
        i++
      }
    }
    
    return answer;
  }