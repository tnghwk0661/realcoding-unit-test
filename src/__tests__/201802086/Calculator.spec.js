import Calculator from "../../js/calculator/Calculator";

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
})
afterAll(() => {
  console.log("모든 테스트가 완료된 후 한번만 실행된다.");
})
beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행된다.");
})
afterEach(() =>{
  console.log("각 테스트가 완료된 후 실행된다.");
})

describe("음수 양수 판단", () => {
    const cal = new Calculator();
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    expect(cal.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    expect(cal.isNegative(0)).not.toBeTruthy();
  });
});

describe("Date 클래스 판단하기.", () => {
    const cal = new Calculator();
  test("getDate를 하면 Date객체가 나온다.", () => {
    expect(cal.getDate()).toBeInstanceOf(Date);
  });

  
describe("Vertual Functiom", () =>{
  test("customCalculation send para.",() =>{
      const calculator = new Calculator();
      const mockFunction = jest.fn();
      calculator.customCalculation(mockFunction);
      expect(mockFunction).toHaveBeenCalled();
  });

  test("Send 6,7,8 to customCalculation Then, Receive 6,7,8", () => {
      const calculator = new Calculator();
      const mockFunction = jest.fn();
      calculator.customCalculation(mockFunction, 6, 7, 8);
      expect(mockFunction).toHaveBeenCalledWith(6, 7, 8);
  });
  test("abs call math.abs", () => {
      const calculator = new Calculator();
      const mockMathAbs = jest.spyOn(Math, "abs");
      calculator.abs(7);
      expect(mockMathAbs).toHaveBeenCalled();
  });

});
