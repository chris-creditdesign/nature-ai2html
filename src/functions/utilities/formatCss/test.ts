import formatCss from ".";

test("Expect object of css properties to be turned into string with indentation", () => {
  const cssObject = { color: "green", padding: "10px" };
  expect(formatCss(cssObject, " ")).toBe("\r color:green;\r padding:10px;\r");
  expect(formatCss(cssObject, "\t")).toBe(
    "\r\tcolor:green;\r\tpadding:10px;\r"
  );
  expect(formatCss(cssObject, "\t\t")).toBe(
    "\r\t\tcolor:green;\r\t\tpadding:10px;\r"
  );
});
