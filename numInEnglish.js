const numInEnglish = (num) => {
  let length = num.toString().length;
  if (length === 1) {
    return numToStrDigits(num);
  } else if (length === 2) {
    return numToStrTwoDigits(num);
  } else if (length === 3) {
    return numToStrThreeDigits(num);
  } else if (length > 3) {
    return numToStrMoreDigits(num);
  }
};
const numToStrDigits = (num) => {
  const arrOfDigit = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let res = "";
  return (res += arrOfDigit[num - 1]);
};
const numToStrTwoDigits = (num) => {
  const arrOfTwoDigit = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let str = "";
  num = num.toString().split("");
  let [thirstDigit, secondDigit] = num;
  if (+secondDigit !== 0) {
    str =
      str + arrOfTwoDigit[thirstDigit - 1] + " " + numToStrDigits(secondDigit);
  } else {
    str = str + arrOfTwoDigit[thirstDigit - 1];
  }

  return str;
};
const numToStrThreeDigits = (num) => {
  const arrOfThreeDigit = ["hundred"];
  let str = "";
  num = num.toString().split("");
  let [thirdDigit, secondDigit, thirstDigit] = num; // 355
  console.log(thirstDigit, secondDigit, thirstDigit);
  if (+secondDigit !== 0 && +thirstDigit !== 0) {
    let twoDigitNum = secondDigit + thirstDigit;
    str +=
      numToStrDigits(thirdDigit) +
      " " +
      arrOfThreeDigit[0] +
      " " +
      numToStrTwoDigits(twoDigitNum);
    return str;
  } else if (+secondDigit === 0 && +thirstDigit === 0) {
    str += numToStrDigits(thirdDigit) + " " + arrOfThreeDigit[0];
    return str;
  } else if (+secondDigit === 0) {
    str +=
      numToStrDigits(thirdDigit) +
      " " +
      arrOfThreeDigit[0] +
      " " +
      numToStrDigits(thirstDigit);
    return str;
  } else if (+thirstDigit === 0) {
    let twoDigitNum = secondDigit + thirstDigit;
    str +=
      numToStrDigits(thirdDigit) +
      " " +
      arrOfThreeDigit[0] +
      " " +
      numToStrTwoDigits(twoDigitNum);
    return str;
  }
};
const numToStrMoreDigits = (num) => {
  let str = "";
  const arrOfFourDigit = ["thousand"];
  let strNum = num.toString().split("");
  let [digit1, digit2, digit3, digit4] = strNum;
  if (strNum.length === 4) {
    if (+digit4 === 0 && +digit3 === 0 && +digit2 === 0) {
      return (str += numToStrDigits(digit1) + " " + arrOfFourDigit[0]);
    } else if (+digit2 === 0 && +digit3 === 0) {
      return (str +=
        numToStrDigits(digit1) +
        " " +
        arrOfFourDigit[0] +
        " " +
        numToStrDigits(digit4));
    } else if (+digit2 === 0) {
      return (str +=
        numToStrDigits(digit1) +
        " " +
        arrOfFourDigit[0] +
        " " +
        numToStrTwoDigits(digit3 + digit4));
    }
    let threeDigits = digit2 + digit3 + digit4;
    return (str +=
      numToStrDigits(digit1) +
      " " +
      arrOfFourDigit[0] +
      " " +
      numToStrThreeDigits(threeDigits));
  }
};
