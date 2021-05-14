//. Given a word and a list of possible anagrams, select the correct sublist.
const anagram = (str, arr) => {
  let anagramsArr = [];
  for (let el of arr) {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (el.includes(str[i])) {
        count++;
      }
    }
    if (count === str.length && el.length === str.length) {
      anagramsArr.push(el);
    }
  }
  return anagramsArr;
};
