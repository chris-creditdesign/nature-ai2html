import toArray from ".";

test("Expect elements of an array-like object to returned within a new array", () => {
  const fakeNodeList = {
    0: "<div>",
    1: "  <p>One</p>",
    2: "  <p>Two</p>",
    3: "  <p>Three</p>",
    4: "</div>",
    length: 5,
  };

  const nodeArray = toArray(fakeNodeList);

  expect(fakeNodeList.length).toEqual(nodeArray.length);
  expect(fakeNodeList[0]).toEqual(nodeArray[0]);
});
