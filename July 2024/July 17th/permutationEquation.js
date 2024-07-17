// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

// Example


// Each value of  between  and , the length of the sequence, is analyzed as follows:

// , so 
// , so 
// , so 
// , so 
// , so 
// The values for  are .

// Function Description

// Complete the permutationEquation function in the editor below.

// permutationEquation has the following parameter(s):

// int p[n]: an array of integers
// Returns

// int[n]: the values of  for all  in the arithmetic sequence  to 

function permutationEquation(p) {
    let result = []
    let x = 1
    let temp = 0

    while(x<=p.length){
        for(let i = 0; i<p.length; i++){
            if(p[i]===x){
                temp = i+1
                for(let j = 0; j<p.length;j++){
                    if(p[j] === temp){
                        result.push(j+1)
                    }
                }
            }
        }
        x++
    }
    
    return result
}