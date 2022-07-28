import roundTo from ".";

test("rounded number has expected number of decimal places", () => {
  const pi = 3.141592653589793;
  expect(roundTo(pi, 3)).toBe(3.142);
  expect(roundTo(pi, 0)).toBe(3);
  expect(roundTo(pi)).toBe(3);
  expect(roundTo(pi, -3)).toBe(0);
});
