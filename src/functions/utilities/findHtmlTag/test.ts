import findHtmlTag from ".";

test("return the first html tag in a string or null if none", () => {
  expect(findHtmlTag("Hello")).toBe(null);
  expect(findHtmlTag("<p>Hello</p>")).toBe("p");
  expect(findHtmlTag("<p>Hello <span>goodbye</span></p>")).toBe("p");
});
