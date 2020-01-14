const longestWord = require('./index')

test('isPrime', () => {
  expect(typeof isPrime).toEqual('function');
});

test('isPrime return true or false', () => {
  expect(isPrime(2) ).toEqual(true);
});

test('isPrime return true or false', () => {
  expect(isPrime(3) ).toEqual(true);
});

