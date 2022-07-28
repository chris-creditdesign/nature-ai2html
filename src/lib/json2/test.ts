import json2 from ".";

test("json2 to behave like JSON.parse and JSON.stringify", () => {
  const JSON = json2();

  const myTestObject = { a: "one", b: "two" };
  const myTestString = '{ "test": "JSON is working", "hello": 99 }';

  expect(JSON.stringify(myTestObject)).toBe('{"a":"one","b":"two"}');

  expect(JSON.parse(myTestString)).toMatchObject({
    test: "JSON is working",
    hello: 99,
  });
});
