function repeatedString(s, n) {
    let answer = 0;
    let num = 0
    let arr = s.split("")
    
    for (let i =0; i<arr.length;i++){
      if(arr[i]==="a"){
        num++
      }
    }
    
    let remain = n % s.length
    let extra = 0;
    
    for(let i = 0; i<remain;i++){
      if(arr[i]==="a"){
        extra++
      }
    }
    
    answer = num * Math.floor(n/(s.length)) + extra
  
    //first option: had time out issues. rethought the problem and came up with the above
    
    // if(s.length==1 && s =="a"){
    //   return n
    // }
  
    // while (num > 0){
      
    //   for(let i = 0; i< arr.length; i++){
    //     num--
    //     if(arr[i]==="a"){
    //       answer++
    //     }
    //     if(num==0){
    //       break
    //     }
    //   }
    // }
    
    return answer
  }