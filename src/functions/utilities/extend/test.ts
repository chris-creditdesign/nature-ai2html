import extend from ".";

test("expect extend to behave the same way as Object.assign", () => {
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const source2 = { c: 6, d: 7 };

  expect(extend(target, source)).toMatchObject({ a: 1, b: 4, c: 5 });

  // Extend with multiple sources
  expect(extend(target, source, source2)).toMatchObject({
    a: 1,
    b: 4,
    c: 6,
    d: 7,
  });

  // Cloning an object
  const objectToClone = { a: 1 };
  expect(extend({}, objectToClone)).toMatchObject({ a: 1 });
});
