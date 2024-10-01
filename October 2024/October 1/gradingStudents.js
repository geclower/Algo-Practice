function gradingStudents(grades) {
    let finalGrades = []
  
    for(let i = 0; i < grades.length; i++){
      if(grades[i] < 38){
        finalGrades.push(grades[i])
      }
      else{
        if((grades[i] + 1)%5 == 0){
          grades[i]+=1
        }else if((grades[i] + 2)%5 == 0){
          grades[i]+=2
        }
        finalGrades.push(grades[i])
      }
    }
    
    return finalGrades
  }
  console.log(gradingStudents([73, 67, 38, 33]))  