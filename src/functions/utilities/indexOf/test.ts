import indexOf from ".";

test("expect indexOf to behave like array.prototype.indexOf", () => {
  // The indexOf() method returns the first index at which a given
  // element can be found in the array, or -1 if it is not present.

  const beasts = ["ant", "bison", "camel", "duck", "bison"];

  expect(indexOf(beasts, "bison")).toBe(1);
  expect(indexOf(beasts, "bison", 2)).toBe(4);
  expect(indexOf(beasts, "giraffe")).toBe(-1);
});
