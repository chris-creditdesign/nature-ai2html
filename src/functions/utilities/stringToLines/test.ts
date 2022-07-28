import stringToLines from ".";

test("Split string on newline and return characters", () => {
  expect(
    stringToLines("This is line one \r This is line two \n This is line three")
  ).toMatchObject([
    "This is line one ",
    " This is line two ",
    " This is line three",
  ]);

  expect(
    stringToLines(
      "This is line one \r This is line two \n \r \n \n This is line three"
    )
  ).toMatchObject([
    "This is line one ",
    " This is line two ",
    " This is line three",
  ]);
});
