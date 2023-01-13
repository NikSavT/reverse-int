module.exports = function reverse(n) {
  let reverseNum = '',
    numString = n >= 0 ? String(n) : String(-n);

  for (i = 0; i < numString.length; i++) {
    reverseNum = numString[i] + reverseNum;
  }

  return +reverseNum;
};

// console.log(module.exports(261));