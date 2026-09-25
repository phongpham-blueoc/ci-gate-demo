const { calculateTotal } = require('./pricing');

test('calculates total without discount', () => {
  expect(calculateTotal(100, 2)).toBe(200);
});

test('calculates total with discount', () => {
  expect(calculateTotal(100, 2, 10)).toBe(180);
});
