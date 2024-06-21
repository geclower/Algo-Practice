// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

// Example



// The person can buy a , or a . Choose the latter as the more expensive option and return .

// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or  if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
    let total = -1

    for(let i= 0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
           if(drives[j]+keyboards[i]>total && drives[j]+keyboards[i]<=b){
               total = drives[j]+keyboards[i]
           } 
        }
    }
    return total
}