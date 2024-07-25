function extraLongFactorials(n) {
    let answer = BigInt(n)
    let x = n -1
  
    while(x > 0){
      answer *= BigInt(x)
      answer = BigInt(answer)
      x--
    }
  
    console.log(answer.toString())
  }