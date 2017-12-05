const multiply = require('./multiply');

it('should return the product of two numbers', () => {
  const result = multiply(2, 3);
  const expectedProduct = 6;
  expect(result).toBe(expectedProduct);
});
