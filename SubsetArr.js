// . Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.
const subSetArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = i + 2;
    while (k <= arr.length - 1 && j <= arr.length - 2) {
      if (k < arr.length - 1) {
        newArr.push([...[arr[i], arr[j], arr[k]]]);
        k++;
      } else if (k === arr.length - 1) {
        newArr.push([...[arr[i], arr[j], arr[k]]]);
        j++;
        k = j + 1;
      }
    }
  }
  return newArr;
};
