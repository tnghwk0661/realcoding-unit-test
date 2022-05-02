import Calculator, {DivideZeroError} from "../js/calculator/Calculator";
describe("test div.", () => {
  test("div / 0 ", ()=>{
    expect(11 / 0).toBeInstanceOf(DivideZeroError);
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