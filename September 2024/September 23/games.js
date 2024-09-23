function howManyGames(p, d, m, s) {
    let games = 0
    let funds = s
    let price = p
  
    while(funds > 0){
      funds-= price
      if(price - d < m){
        price = m 
      }else{
        price-=d
      }
      if(funds < 0){
        break
      }else{
        games++
      }
      console.log(funds)
    }
    
    return games
  }