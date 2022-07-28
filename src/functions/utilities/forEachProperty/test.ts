import forEachProperty from ".";

test("expert forEachProperty to pass each key value in object to callBack", () => {
  // The value is passed as the first argument and the key as the second
  const testObject = { State: "Wyoming", Abbrev: "Wyo.", Code: "WY" };

  const callBack = jest.fn();
  forEachProperty(testObject, callBack);

  expect(callBack).toHaveBeenCalledWith("Wyoming", "State");
  expect(callBack).toHaveBeenCalledWith("Wyo.", "Abbrev");
  expect(callBack).toHaveBeenCalledWith("WY", "Code");
});
