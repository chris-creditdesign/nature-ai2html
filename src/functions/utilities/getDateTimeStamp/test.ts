import getDateTimeStamp from ".";

test("Expect date object to be returned as date string", () => {
  const date = new Date("2020-02-15");
  expect(getDateTimeStamp(date)).toBe("2020-02-15 00:00");
});
