import objectDiff from ".";

test("Expect to return object containing properties of a that are missing or different in b", () => {
  // Return null if output object would be empty

  const a1 = { a: 1, b: 2 };
  const b1 = { b: 2, c: 5 };
  const b2 = { b: 4, c: 5 };

  expect(objectDiff(a1, b1)).toMatchObject({ a: 1 });
  expect(objectDiff(a1, b2)).toMatchObject({ a: 1, b: 2 });
  expect(objectDiff(a1, { a: 1, b: 2 })).toBe(null);
});
