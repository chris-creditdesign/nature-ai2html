import cleanHtmlText from ".";

test("Expect special characters to be replaced, but not inside html tags", () => {
  expect(cleanHtmlText("<html></html>")).toBe("<html></html>");
  expect(
    cleanHtmlText(
      "<a href='https://www.nature.com' style='color: green;'>nature & an em dash —</a>"
    )
  ).toBe(
    "<a href='https://www.nature.com' style='color: green;'>nature & an em dash &mdash;</a>"
  );
});
