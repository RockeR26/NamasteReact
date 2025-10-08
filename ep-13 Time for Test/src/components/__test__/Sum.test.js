import Sum from "../Sum"

test('Sum should calculate the addition of two numbers  ', () => {
  const result=Sum(4,5);
  
  expect(result).toBe(9); // Assertion

});
