// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
const oddOrEven = (arr) => {
  let evenArr = [];
  let oddArr = [];
  arr.forEach((el) => {
    if (el % 2 === 0) {
      evenArr.push(el);
    } else {
      oddArr.push(el);
    }
  });
  console.log(evenArr, oddArr);
};
oddOrEven([4, 8, 1, 2, 36, 5, 9, 8]);
