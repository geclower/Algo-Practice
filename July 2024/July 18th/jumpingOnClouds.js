function jumpingOnClouds(cloudArr, jump) {
  let e = 99;

  if (cloudArr[0] === 1) {
    e -= 2;
  }

  for (let i = jump; i !== 0; i += jump) {
    if (i >= cloudArr.length) {
      i = i - cloudArr.length;
    }
    if (i == 0) {
      break;
    }
    if (cloudArr[i] === 1) {
      e -= 2;
    }
    e--;
  }

  return e;
}
