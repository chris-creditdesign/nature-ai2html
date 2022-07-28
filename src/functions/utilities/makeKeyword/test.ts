import makeKeyword from ".";

test("Expect spaces in string to be replaced by underscores", () => {
  expect(makeKeyword("Hello and welcome")).toBe("Hello_and_welcome");
});
