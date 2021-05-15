// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

const findNumbersSum = (str) => str.match(/-?\d+/g).reduce((a, b) => +a + +b);
