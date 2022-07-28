import map from ".";

test("map to behave like array.protype.map", () => {
  const testArray = ["one", "two", "three", "four"];

  const callBack = (d: string) => `modified-${d}`;

  expect(map(testArray, callBack)).toMatchObject([
    "modified-one",
    "modified-two",
    "modified-three",
    "modified-four",
  ]);

  const callBack2 = (d: string, i: number) => `${i}-${d}`;
  expect(map(testArray, callBack2)).toMatchObject([
    "0-one",
    "1-two",
    "2-three",
    "3-four",
  ]);
});
