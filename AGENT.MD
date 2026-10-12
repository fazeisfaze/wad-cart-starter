# AGENT.MD — opencode Skill

This skill provides guidance for opencode when working on the **cart-starter** project.

## Project Overview

A simple cart calculator implementing `cartTotal(items, options)` in `src/cart.js`.

- **`items`**: `[{ name, price, qty }]` — array of items with name, price, and quantity
- **`options`**: `{ vatRate, freeShipFrom, shipFee }` — pricing options
- Returns `subtotal + VAT + shipping`, rounded to the whole đồng (integer)

### Rules

1. **Empty cart** → return `0` (no VAT, no shipping)
2. **Negative price** → throw `RangeError`
3. **`qty` not a positive integer** → throw `RangeError`
4. **VAT**: `vatRate` applied to the subtotal
5. **Shipping**: `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
6. **Round** the final total to the whole đồng using `Math.round()`

### Worked Example

```
2 × 180000 + 1 × 45000 = 405000 subtotal
VAT 32400 (8% of 405000)
shipping 30000 (below 500000 threshold)
-----------------------------
467400
```

## Testing

Run the test suite:

```bash
npm test
```

All tests must pass (`npm test` green). Add tests first if implementing new functionality.

## Implementation Notes

- Plain JavaScript, no dependencies
- The function lives in `src/cart.js`
- Follow the existing test patterns in the project