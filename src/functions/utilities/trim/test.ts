import trim from ".";

test("Remove white space from start and end of string", () => {
  expect(trim("   This is just a test   ")).toBe("This is just a test");
});
