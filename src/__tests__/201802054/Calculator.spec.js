import Calculator from "../../js/calculator/Calculator"

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

  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(0)).not.toBeTruthy();
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date객체가 나온다.", () => {
    const calculator = new Calculator();
    expect(calculator.getDate()).toBeInstanceOf(Date);
  });
});

describe("가상 함수 테스트해보기", () => {
  test("customCalculation은 전달된 함수를 호출시킨다.", () => {
    const func = jest.fn(() => "?");
    const calculator = new Calculator();
    calculator.customCalculation(func);
    expect(func).toHaveBeenCalled();
  });
  test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달된 함수가 1, 2, 3인자를 받아 호출한다.", () => {
    const func = jest.fn((x, y, z) => x * y - z);
    const calculator = new Calculator();
    calculator.customCalculation(func, 1, 2, 3);
    expect(func).toHaveBeenCalledWith(1, 2, 3);
  });
  test("abs함수는 Math.abs를 호출한다.", () => {
    const calculator = new Calculator();
    const spy = jest.spyOn(calculator, 'abs');
    calculator.abs(-4);
    expect(spy).toHaveBeenCalled();
  });
});
