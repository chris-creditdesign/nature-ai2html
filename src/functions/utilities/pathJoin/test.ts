import pathJoin from ".";

test("Expect pathJoint to behave like Node.js path.join()", () => {
  expect(pathJoin("/foo", "bar", "baz/asdf")).toBe("foo/bar/baz/asdf");
});
