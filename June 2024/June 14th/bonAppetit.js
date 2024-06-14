// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: . Anna declines to eat item  which costs . If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, he should refund  to Anna.

// Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill
// Input Format

// The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.
// The second line contains  space-separated integers  where .
// The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.

function bonAppetit(bill, k, charge) {
    let amountDue = 0
  
    for(let i = 0; i < bill.length; i++){
      if(i != k){
        amountDue += bill[i]
      }
    }
    
    if((amountDue/2)==charge){
      console.log("Bon Appetit")
    }else{
      console.log(charge-(amountDue/2))
    }
  }