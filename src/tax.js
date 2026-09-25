// New function — NO TEST WRITTEN for this
function applyTax(amount, taxRate) {
  if (taxRate < 0) throw new Error('Tax rate cannot be negative');
  return amount + (amount * taxRate / 100);
}

function applyBulkDiscount(quantity, unitPrice) {
  if (quantity >= 100) return unitPrice * 0.7;
  if (quantity >= 50)  return unitPrice * 0.85;
  return unitPrice;
}

module.exports = { applyTax, applyBulkDiscount };
