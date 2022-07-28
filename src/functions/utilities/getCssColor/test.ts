import getCssColor from ".";

test("Expect three colour values and an option opacity to be turned into an colour string", () => {
  expect(getCssColor(0, 255, 255)).toBe("rgb(0,255,255)");
  expect(getCssColor(0, 255, 255, 100)).toBe("rgb(0,255,255)");
  expect(getCssColor(0, 255, 255, 0)).toBe("rgb(0,255,255)");
  expect(getCssColor(0, 255, 255, 99)).toBe("rgba(0,255,255,0.99)");
  expect(getCssColor(0, 255, 255, 50)).toBe("rgba(0,255,255,0.5)");
});
