const primeFactors = require('./index')

test('primeFactors', () => {
  expect(typeof primeFactors).toEqual('function');
});

test('primeFactors return number', () => {
  expect(primeFactors(2) ).toEqual([2]);
});

test('primeFactors return numbere', () => {
  expect(primeFactors(37) ).toEqual([37]);
});

