import zeropPad from ".";

test("Expect the input to be turned into a string and zeros added if length is less that digits", () => {
  expect(zeropPad("hello", 20)).toBe("000000000000000hello");
  expect(zeropPad(21, 2)).toBe("21");
  expect(zeropPad(2, 2)).toBe("02");
});
