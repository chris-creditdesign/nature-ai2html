import stripTag from ".";

test("Expect specified opening and closing tag to be removed from string", () => {
  expect(stripTag("h1", "<h1>Hello</h1>")).toBe("Hello");
  expect(stripTag("h1", "<h1>Hello <span>goodbye</span></h1>")).toBe(
    "Hello <span>goodbye</span>"
  );
  expect(stripTag("span", "<h1>Hello <span>goodbye</span></h1>")).toBe(
    "<h1>Hello goodbye</h1>"
  );
});
