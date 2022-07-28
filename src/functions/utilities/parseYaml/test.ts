import parseYaml from ".";

test("Expect multi-line yml string to be return as an object with corresponding keys and values", () => {
  expect(parseYaml("one:a \r two:b \r three: c")).toEqual({
    one: "a",
    two: "b",
    three: "c",
  });

  const testString = `project_type: ai2html
min_width: 300
max_width: 600
headline: "Elementary: Schools in District 3"
leadin: ""
credit: "By The New York “Times”"
show_in_compatible_apps: "yes"
constrain_width_to_text_column: true`;

  expect(parseYaml(testString)).toEqual({
    project_type: "ai2html",
    min_width: "300",
    max_width: "600",
    headline: "Elementary: Schools in District 3",
    leadin: "",
    credit: "By The New York “Times”",
    show_in_compatible_apps: "yes",
    constrain_width_to_text_column: "true",
  });
});
