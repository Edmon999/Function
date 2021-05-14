//Write a function to find longest substring in a given a string withoutrepeating characters except space
//   e a function  //  ction
//character. If there are several,return the last one. Considerthat all letters are lowercase.
const longestSubString = (str) => {
  let maxLengthStr = "";
  let temp = "";
  for (let char of str) {
    if (char === " " || char === "," || !temp.includes(char)) {
      temp += char;
    } else {
      temp = temp.slice(temp.indexOf(char) + 1) + char;
      console.log(temp);
    }
    maxLengthStr = maxLengthStr.length <= temp.length ? temp : maxLengthStr;
  }
  return maxLengthStr;
};
longestSubString("parting your soup is not a miracle, bruce.");
