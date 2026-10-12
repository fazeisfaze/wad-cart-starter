// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) return 0
  const { vatRate, freeShipFrom, shipFee } = options
  let subtotal = 0
  for (const { price, qty } of items) {
    if (price < 0) throw new RangeError('negative price')
    if (!Number.isInteger(qty) || qty <= 0) throw new RangeError('qty must be a positive integer')
    subtotal += price * qty
  }
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
  return Math.round(subtotal + vat + shipping)
}
