function taumBday(b, w, bc, wc, z) {
    let BIb = BigInt(b)
    let BIw = BigInt(w)
    let BIbc = BigInt(bc)
    let BIwc = BigInt(wc)
    let BIz = BigInt(z)
    let blackCost = 0
    let whiteCost = 0
  
    if((wc+z)<bc){
      blackCost = BigInt((BIwc+BIz) * BIb)
    }else{
      blackCost = BigInt(BIb*BIbc)
    }
    
    if ((bc+z)<wc){
      whiteCost = BigInt((BIbc+BIz) * BIw)
    } else{
      whiteCost = BigInt(BIw*BIwc)
    }
    
    return BigInt(blackCost + whiteCost)
  
  }
  