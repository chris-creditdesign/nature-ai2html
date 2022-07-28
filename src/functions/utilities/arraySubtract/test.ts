import arraySubtract from ".";

test("Expect to return elements in array 'a' but not in array 'b'", () => {
  const a1 = ["one", "two", "three", "four"];
  const b1 = ["three", "four", "five", "six"];

  expect(arraySubtract(a1, b1)).toMatchObject(["one", "two"]);
  expect(arraySubtract(a1, ["one", "two", "three", "four"])).toMatchObject([]);
  expect(arraySubtract(a1, [])).toMatchObject(["one", "two", "three", "four"]);

  const a2 = [1, 2, 3, 4];
  const b2 = [1, 2, 5, 6];
  expect(arraySubtract(a2, b2)).toMatchObject([3, 4]);
});
