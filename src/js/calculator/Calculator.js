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
    if (!b){
      throw "ZeroDivisionError";
    }
    return a / b;
  };
}
