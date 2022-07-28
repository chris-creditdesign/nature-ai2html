import contains from ".";

test("expect contains to return true if the element is in the array", () => {
  // The indexOf() method returns the first index at which a given
  // element can be found in the array, or -1 if it is not present.

  const beasts = ["ant", "bison", "camel", "duck", "bison"];

  expect(contains(beasts, "bison")).toBe(true);
  expect(contains(beasts, "giraffe")).toBe(false);
});
