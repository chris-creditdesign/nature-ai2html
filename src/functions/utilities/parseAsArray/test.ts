import parseAsArray from ".";

test("Expect a string containing commas to be returned as an array", () => {
  expect(parseAsArray("This,is,a,test")).toEqual(["This", "is", "a", "test"]);
  expect(parseAsArray("     This,is,a,test     ")).toEqual([
    "This",
    "is",
    "a",
    "test",
  ]);
  expect(parseAsArray("")).toEqual([]);
});
