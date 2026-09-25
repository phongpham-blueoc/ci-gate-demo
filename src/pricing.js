function calculateTotal(price, quantity, discountPercent = 0) {
  const subtotal = price * quantity;
  const discount = subtotal * (discountPercent / 100);
  return subtotal - discount;
}

function applyLoyaltyDiscount(total, loyaltyTier) {
  if (loyaltyTier === 'gold') return total * 0.85;
  if (loyaltyTier === 'silver') return total * 0.95;
  return total;
}

module.exports = { calculateTotal, applyLoyaltyDiscount };

