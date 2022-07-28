import replaceChars from ".";
import { basicCharacterReplacements } from "../../../constant_data";

test("Expect characters to be replaced according to an array of regex options", () => {
  expect(replaceChars("<html></html>", basicCharacterReplacements)).toBe(
    "&lt;html&gt;&lt;/html&gt;"
  );
});
