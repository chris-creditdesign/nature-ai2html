import straightenCurlyQuotes from ".";

test("Expect curlyquotes to be replaced by straight quotes", () => {
  expect(straightenCurlyQuotes(`“Hello” and ‘GoodBye’`)).toBe(
    `"Hello" and 'GoodBye'`
  );
});
