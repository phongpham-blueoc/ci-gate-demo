const { applyTax, applyBulkDiscount } = require('./tax');

describe('applyTax', () => {
  test('applies tax correctly', () => {
    expect(applyTax(100, 10)).toBe(110);
  });

  test('zero tax returns original amount', () => {
    expect(applyTax(200, 0)).toBe(200);
  });

  test('throws on negative tax rate', () => {
    expect(() => applyTax(100, -5)).toThrow('Tax rate cannot be negative');
  });
});

describe('applyBulkDiscount', () => {
  test('no discount below 50 units', () => {
    expect(applyBulkDiscount(10, 100)).toBe(100);
  });

  test('15% discount for 50+ units', () => {
    expect(applyBulkDiscount(50, 100)).toBe(85);
  });

  test('30% discount for 100+ units', () => {
    expect(applyBulkDiscount(100, 100)).toBe(70);
  });
});
