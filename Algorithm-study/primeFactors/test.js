const longestWord = require('./index')

test('primeFactors', () => {
  expect(typeof primeFactors).toEqual('function');
});

test('primeFactors return number', () => {
  expect(primeFactors(2) ).toEqual(true);
});

test('primeFactors return numbere', () => {
  expect(primeFactors(3) ).toEqual(true);
});

