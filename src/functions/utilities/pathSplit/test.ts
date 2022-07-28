import pathSplit from ".";

test("Expect filename to be separated from path", () => {
  expect(pathSplit("/foo/bar/baz/index.html")).toMatchObject([
    "/foo/bar/baz",
    "index.html",
  ]);

  expect(pathSplit("foo/bar/baz/index.html")).toMatchObject([
    "foo/bar/baz",
    "index.html",
  ]);
});
