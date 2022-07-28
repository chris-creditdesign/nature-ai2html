import encodeHtmlEntities from ".";

test("Expect special characters to be replaced", () => {
  expect(encodeHtmlEntities("<html></html>")).toBe("&lt;html&gt;&lt;/html&gt;");
  expect(
    encodeHtmlEntities(
      "<a href='https://www.nature.com' style='color: green;'>nature & an em dash —</a>"
    )
  ).toBe(
    "&lt;a href='https://www.nature.com' style='color: green;'&gt;nature &amp; an em dash &mdash;&lt;/a&gt;"
  );
});
