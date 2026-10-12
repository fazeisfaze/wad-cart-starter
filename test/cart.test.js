import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('free shipping once subtotal reaches the threshold', () => {
  const items = [{ name: 'A', price: 500000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500000)
})

test('shipFee is charged below the threshold', () => {
  const items = [{ name: 'A', price: 100000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 130000)
})

test('empty cart returns 0 with no VAT and no shipping', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('VAT applies to the subtotal and total is rounded to whole đồng', () => {
  const items = [{ name: 'A', price: 33333, qty: 3 }]
  const options = { vatRate: 0.1, freeShipFrom: 0, shipFee: 0 }
  assert.equal(cartTotal(items, options), 109999)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'A', price: -1, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('qty that is not a positive integer throws RangeError', () => {
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal([{ name: 'A', price: 1, qty: 0 }], options), RangeError)
  assert.throws(() => cartTotal([{ name: 'A', price: 1, qty: -2 }], options), RangeError)
  assert.throws(() => cartTotal([{ name: 'A', price: 1, qty: 1.5 }], options), RangeError)
})
