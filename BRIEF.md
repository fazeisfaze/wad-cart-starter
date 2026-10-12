Implement cartTotal(items, options) in src/cart.js per README.md: subtotal of
price × qty, VAT at vatRate on the subtotal, shipping 0 when subtotal >=
freeShipFrom else shipFee, total rounded to a whole đồng, empty cart returns 0,
and RangeError for a negative price or a qty that is not a positive integer.
Add tests first, then make npm test green.
