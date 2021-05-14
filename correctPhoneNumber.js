const correctPhoneNumber1 = (phoneNumber) => {
  phoneNumber = phoneNumber.split("");
  let digits = [];
  for (let i = 0; i < phoneNumber.length; i++) {
    if (!isNaN(phoneNumber[i])) {
      digits.push(phoneNumber[i]);
    }
  }
  if (digits.length < 10 || digits.length > 10) {
    return "Bad Number";
  }
  if (digits.length === 10) {
    console.log("good Number");
  }
  if (phoneNumber.length === 11 && phoneNumber[0] === "+") {
    return phoneNumber.slice(1).join("");
  }
  if (phoneNumber.indexOf("+") !== phoneNumber.lastIndexOf("+")) {
    return "bad number";
  }
  if (phoneNumber[0] !== "+") {
    return "bad number";
  }
};
correctPhoneNumber1("+1234567890");
