function move_zeros(arrNum, isRight = true){
  const zeroArray = [];
  let i = 0;
  while (i<arrNum.length){
    if (!arrNum[i]){
      zeroArray.push(arrNum[i]);
      arrNum.splice(i,1);
      continue;
    }
    i+=1;
  }
  
  return isRight?arrNum.concat(zeroArray):zeroArray.concat(arrNum);
}

//module.exports = moveZeros;
