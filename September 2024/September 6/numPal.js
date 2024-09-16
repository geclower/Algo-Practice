var isPalindrome = function(x) {
    result = x.toString().split("").reverse().join("")
    if(x==result){
        return true
    }else{
        return false
    }
};