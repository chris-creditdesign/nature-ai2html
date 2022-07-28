import addEnclosingTag from ".";

test("Expect string to be returned wrapped in html tag", () => {
  expect(addEnclosingTag("h1", "Hello")).toBe("<h1>\rHello\r</h1>");
  // If tag is already present, expect string to be returned unchanged
  expect(addEnclosingTag("h1", "<h1>Hello</h1>")).toBe("<h1>Hello</h1>");
  expect(addEnclosingTag("h1", "<h1>Hello")).toBe("<h1>Hello\r</h1>");
  expect(addEnclosingTag("h1", "Hello</h1>")).toBe("<h1>\rHello</h1>");
});
