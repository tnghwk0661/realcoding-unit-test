import Calculator from "../js/calculator/Calculator";

describe("사칙연산 뺄셈 테스트.", () => {
  test("3과 5를 빼면 -2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(3,5)).toEqual(-2);
  });
  test("10 과 10을 빼면 0이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(10,10)).toEqual(0);
  });
  test("0과 0를 빼면 0이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(0,0)).toEqual(0);
  });
  test("100과 37을 빼면 63이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(100, 37)).toEqual(63);
  });
  test("-100과 -37을 빼면 -63이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(-100, -37)).toEqual(-63);
  });
  test("80과 160을 빼면 -80이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(80, 160)).toEqual(-80);
  });
  test("2000과 100을 빼면 1900이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(2000, 100)).toEqual(1900);
  });
  test("0과 -1를 빼면 1이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(0,-1)).toEqual(1);
  });
  test("-1과 0을 빼면 -1이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(-1, 0)).toEqual(-1);
  });
  test("987654와 654를 빼면 987000이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(987654, 654)).toEqual(987000);
  });
  
});