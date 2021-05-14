// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
// string. If there are several words which are the longest ones, print the last word(words can be separated
// by space, comma or hyphen).
const largestWord = (str) => {
  str = str.split(" ");
  let wordLengths = [];
  for (let el of str) {
    wordLengths.push(el.length);
  }
  let max = Math.max(...wordLengths);
  for (let i = 0; i < str.length; i++) {
    if (str[i].length === max) {
      return str[i];
    }
  }
};
largestWord("A revolution without dancing is a revolution not worth having.");
