class Calculator {
  plus = (a, b) => {
    return a + b;
  };

  minus = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (b == 0){
      throw new DivideZeroError();
    }
    return a / b;
  };
}

export default Calculator;
