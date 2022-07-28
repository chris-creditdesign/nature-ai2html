import straightenCurlyQuotesInsideAngleBrackets from ".";

test("Expect curly quotes added by illustrator to HTML to be corrected", () => {
  expect(
    straightenCurlyQuotesInsideAngleBrackets(
      `<a href=“https://www.nature.com” style=“color: red;”>nature</a>`
    )
  ).toBe('<a href="https://www.nature.com" style="color: red;">nature</a>');
});
