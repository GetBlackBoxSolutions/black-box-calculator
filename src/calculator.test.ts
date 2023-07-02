import { add, subtract, multiply, divide } from "./calculator";

test("adds 4 + 2 to equal 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("subtract 4 - 2 to equal 2", () => {
  expect(subtract(4, 2)).toBe(2);
});

test("multiply 4 * 2 to equal 8", () => {
  expect(multiply(4, 2)).toBe(8);
});

test("divide 4 / 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2);
});

test("divide 4 / 0 to equal Error", () => {
  expect(() => divide(4, 0)).toThrow("Cannot divide by zero");
});
