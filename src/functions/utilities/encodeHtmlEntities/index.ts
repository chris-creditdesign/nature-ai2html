import replaceChars from "../replaceChars";
import {
  basicCharacterReplacements,
  extraCharacterReplacements,
} from "../../../constant_data";

// TODO: don't convert ampersand in pre-existing entities (e.g. "&quot;" -> "&amp;quot;")
const encodeHtmlEntities = (str: string) => {
  return replaceChars(
    str,
    basicCharacterReplacements.concat(extraCharacterReplacements)
  );
};

export default encodeHtmlEntities;
