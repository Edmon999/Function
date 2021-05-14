// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the numberis even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.
const allElEven = (arr) => {
  let bool = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      bool = false;
      return bool;
    }
  }
  return true;
};
const evenNum = (num1, num2) => {
  let arr = [];
  let res;
  for (let i = num1; i < num2; i++) {
    if (i % 2 === 0) {
      res = i.toString().split("");
      if (allElEven(res)) {
        arr.push(i);
      }
    }
  }
  if (arr.length < 1) {
    return "“Such numbers does not exist.”";
  }
  return arr.join(",");
};
evenNum(19, 42);
