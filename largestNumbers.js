// Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are largerthan the given number.
const largestNumbers = (arr, num) => {
  let newArr = arr.filter((el) => el > num);
  if (newArr.length > 0) {
    return newArr;
  } else {
    return "Such values do not exist.";
  }
};
largestNumbers([1, 1, 2, -3, 0, 8, 4, 0], 9);
