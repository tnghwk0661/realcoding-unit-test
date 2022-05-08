import Calculator from "../js/calculator/Calculator";

describe("음수 양수 판단", () => {
  const calculator = new Calculator();
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    expect(calculator.isNegative(7)).toBeFalsy;
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    expect(calculator.isNegative(-3)).toBeTruthy;
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    expect(calculator.isNegative(0)).not.toBeTruthy();
  });

});

describe("Date 클래스 판단하기", () => {
  const calculator = new Calculator();
  test("getDate를 하면 Date객체가 나온다.", () =>{
    expect(calculator.getDate()).toBeInstanceOf(Date);
  })
})
