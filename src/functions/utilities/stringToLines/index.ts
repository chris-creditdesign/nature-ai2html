import { type ExtendedString } from "src/types/global";
import filter from "../filter";

/**
 * Splits a string into non-empty lines
 */
const stringToLines = (str: ExtendedString) => {
  const empty = /^\s*$/;
  const newLineCharacter = /[\r\n\x03]+/;
  const removeEmptyLines = (line: string) => !empty.test(line);

  const splitIntoLines = str.split(newLineCharacter);
  const withoutEmptyLines = filter(splitIntoLines, removeEmptyLines);

  return withoutEmptyLines;
};

export default stringToLines;
