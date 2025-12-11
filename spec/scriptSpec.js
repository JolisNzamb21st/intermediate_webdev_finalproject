const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');
describe("Interest Rate Calculator Tests",() => {
  it("Calculate simple interest", () => {
    var actual = calculateSimpleInterest(1000, 5, 1);
    expect(actual).toBe(50);
  });
  it("calculate Total Interest", () => {
    var actual = calculateTotalPayableAmount(1000, 50);
    expect(actual).toBe(1050);
  });
})