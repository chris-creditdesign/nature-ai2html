import parseKeyValueString from ".";

test("Expect key value string to be returned as an object", () => {
  expect(parseKeyValueString("key:value", {})).toMatchObject({ key: "value" });
  expect(parseKeyValueString("key:value")).toMatchObject({ key: "value" });
  expect(parseKeyValueString("    key   :    value     ", {})).toMatchObject({
    key: "value",
  });
  expect(parseKeyValueString("number:1", {})).toMatchObject({ number: "1" });
  // Add key value to existing object
  expect(parseKeyValueString("number:1", { year: 2022 })).toMatchObject({
    number: "1",
    year: 2022,
  });
});
