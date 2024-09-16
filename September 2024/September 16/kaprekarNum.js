function kaprekarNumbers(p, q) {
    let answer = ""
  
    while(p<=q){
      if(isKaprekar(p)){
        answer = answer + p + " "
      }
      p++
    }
    
    if(answer.length>0){
      console.log(answer)
    }else{
      console.log("INVALID RANGE")
    }
  }
  
  function isKaprekar(num){
    if(num ===1){
      return true
    }
    
    let sqNum = (num*num).toString() 
    
    let len = Math.floor(sqNum.length/2)
  
    let num1 = sqNum.slice(0, len)
    let num2 = sqNum.slice(len)
  
    if(Number(num1) + Number(num2) === num){
      return true
    }else{
      return false
    }
  }
  
