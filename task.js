//Write a function that calculates sum, difference, multiplication and division between given array elements
//depending on passed operation symbol. Write appropriate function for each operation.
const sum = (arr, operationSymbol) => {
  if (operationSymbol === "/") {
    return arr.reduce((acc, el) => {
      return acc / el;
    });
  }
  if (operationSymbol === "+") {
    return arr.reduce((acc, el) => {
      return acc + el;
    });
  }
  if (operationSymbol === "-") {
    return arr.reduce((acc, el) => {
      return acc - el;
    });
  }
  if (operationSymbol === "*") {
    return arr.reduce((acc, el) => {
      return acc * el;
    });
  }
};
