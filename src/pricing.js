function calculateTotal(price, quantity, discountPercent = 0) {
  const subtotal = price * quantity;
  const discount = subtotal * (discountPercent / 100);
  return subtotal - discount;
}

module.exports = { calculateTotal };
