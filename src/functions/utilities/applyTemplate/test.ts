import applyTemplate from ".";

test("Supports ejs-style annotations, with or without =", () => {
  const template = "<%=headline  %><% note %>";
  const output = applyTemplate(template, { headline: "Fu", note: "bar" });

  expect(output).toEqual("Fubar");
});

test('Handles "$" inside replacement text', () => {
  const template = "{{{ price1}}} or {{price2 }}";
  const output = applyTemplate(template, { price1: "$1.00", price2: "$0" });
  expect(output).toEqual("$1.00 or $0");
});

test("variable names can be uppercast and contain hyphens", () => {
  const template = "{{ G-TITLE }}";
  const output = applyTemplate(template, { "g-title": "Title" });
  expect(output).toEqual("Title");
});
