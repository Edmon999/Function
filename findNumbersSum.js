// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.
// const findNumAndSum = (str) => {
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//     }
//   }

// };
const findNumbersSum = (str) => str.match(/-?\d+/g).reduce((a, b) => +a + +b);
