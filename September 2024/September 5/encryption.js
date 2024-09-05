function encryption(s) {
    let finalAnswer = "";
    let finalArray = [];
    let arr = s.split(" ");
    let noSpaceString = arr.join("");
    let split = Math.ceil(Math.sqrt(noSpaceString.length));
  
    for(let i = 0; i<noSpaceString.length; i+=split){
      finalArray.push(noSpaceString.substr(i, split))
    }
  
    let x = 0
    while (x < split){
      for(let i = 0; i<finalArray.length; i++){
        if(finalArray[i][x]){
          finalAnswer = finalAnswer.concat(finalArray[i][x])
        }
        console.log(finalArray[i][x])
      }
      finalAnswer = finalAnswer.concat(" ")
      x++
    }
  
    return finalAnswer;
  }
  