//. Write a function which receives two strings and removes appearances of the second string from the first
// one
const removeStr = (str, removeString) => {
  while (str.includes(removeString)) {
    str = str.replace(removeString, "");
  }
  console.log(str);
};
removeStr(
  "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather",
  "o"
);
