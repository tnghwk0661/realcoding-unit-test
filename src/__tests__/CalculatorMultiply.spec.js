import Calculator from "../js/calculator/Calculator";

describe("사직연산 곱셈 테스트.", () => {
  test("3과 5를 곱하면 15이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(3,5)).toEqual(15);
  })
});