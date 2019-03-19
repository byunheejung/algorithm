const binaryGap = require('./index')

test('longestWord is a function', () => {
  expect(typeof binaryGap).toEqual('function');
});

test('returns the longet word in a mixed case string of text', () => {
  expect(binaryGap(20) ).toEqual(1);
});

test('returns the longet word in a lowercase string', () => {
  expect(binaryGap(74) ).toEqual(2);
});