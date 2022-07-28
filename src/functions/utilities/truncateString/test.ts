import truncateString from ".";

test("Expect string to be truncated to maxlen", () => {
  expect(truncateString("Hello and welcome", 5)).toBe("Hello");
  expect(truncateString("Hello and welcome", 5, true)).toBe("Hello...");
});
