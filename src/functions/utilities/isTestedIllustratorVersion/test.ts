import isTestedIllustratorVersion from ".";

test("return false if the version is too low or too high", () => {
  expect(isTestedIllustratorVersion("17")).toBe(false);
  expect(isTestedIllustratorVersion("26")).toBe(false);
  expect(isTestedIllustratorVersion("24.2.3")).toBe(true);
});
