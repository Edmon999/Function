// Write a function to compute a new string from the given one by moving the first charto come afterthe
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewerthan 3 chars at the end.
const replaceChars = (str) => {
  let newStr = "";
  let strArr = [];
  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 1] !== undefined || str[i + 2] !== undefined) {
      newStr = str.substring(i + 1, i + 3) + str[i];
      strArr.push(newStr);
    }
  }
  return strArr.join("");
};
replaceChars("aweyoolp");
