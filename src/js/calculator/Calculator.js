class Calculator {
  plus = (a, b) => {
    return a + b;
  };
<<<<<<< HEAD
=======
  isNegative = (a) => {
    return a < 0;
  };
  getDate = () => {
    return new Date();
  };
  abs = (a) => {
    return Math.abs(a);
  };
  customCalculation = (callback, ...args) => {
    callback(...args);
  };
}
>>>>>>> main

  minus = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (!b){
      throw new Error("ZeroDivisionError");
    }
    return a / b;
  };
}
