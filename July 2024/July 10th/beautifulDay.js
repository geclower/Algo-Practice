function beautifulDays(firstDay, lastDay, k) {
    let beauDays = 0
    
    for(let i = firstDay; i<=lastDay; i++){
        let numStr = String(i)
        let dayArr = numStr.split("")
        let arrSwap = dayArr.reverse()
        let daySwap = arrSwap.join("")
        
        if((i-daySwap)%k===0){
            beauDays++
        }
    }

    return beauDays
}