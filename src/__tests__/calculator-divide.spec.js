import Calculator, {DivideZeroError} from "../js/calculator/Calculator";
describe("test div.", () => {
  test("11 / 0 ", ()=>{
    const calculator = new Calculator();
    expect(() => calculator.divide(11, 0)).toThrow("ZeroDivisionError");
  });
  test("6 / 3 == 2.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toEqual(2);
  });
  
  test("1024 / 1024 == 1.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(1024, 1024)).toEqual(1);
  });
  
  test("121 / 11 == 11.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(121, 11)).toEqual(11);
  });
});
