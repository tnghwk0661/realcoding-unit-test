import Calculator from "../js/calculator/Calculator";

describe("사직연산 덧셈 테스트.", () => {
  test("3과 5를 더하면 8이다.", () => {
    expect(3 + 5).toEqual(8);
  });
  
  test("6 / 3 == 2.", () => {
    expect(6 / 2).toEqual(2);
  });
  
  test("1024 / 1024 == 1.", () => {
    expect(1024 / 1024).toEqual(1);
  });
  
  test("121 / 11 == 11.", () => {
    expect(121 / 11).toEqual(11);
  });
});