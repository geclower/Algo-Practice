function chocolateFeast(n, c, m) {
    let bars = 0;
    let wrappers = 0;
  
    bars = Math.floor(n / c);
    wrappers = bars;
  
    while (wrappers >= m) {
      let add = Math.floor(wrappers / m)
      bars += add;
      wrappers -= add * m;
      wrappers += add;
    }
  
    return bars;
  }