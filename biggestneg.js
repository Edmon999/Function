const bigNeg = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(...arr[i]);
    } else {
      return "invalid argument";
    }
  }
  let negArr = newArr.filter((el) => el < 0).sort((a, b) => b - a);
  if (negArr.length === 0) {
    return "no negative";
  }
  return negArr[0] * negArr[1];
};
