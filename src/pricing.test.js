const { calculateTotal, applyLoyaltyDiscount } = require('./pricing');

test('calculates total without discount', () => {
  expect(calculateTotal(100, 2)).toBe(200);
});

test('calculates total with discount', () => {
  expect(calculateTotal(100, 2, 10)).toBe(180);
});

describe('applyLoyaltyDiscount', () => {
  test('applies 15% discount for gold tier', () => {
    expect(applyLoyaltyDiscount(100, 'gold')).toBe(85);
  });

  test('applies 5% discount for silver tier', () => {
    expect(applyLoyaltyDiscount(100, 'silver')).toBe(95);
  });

  test('no discount for regular tier', () => {
    expect(applyLoyaltyDiscount(100, 'regular')).toBe(100);
  });
});

