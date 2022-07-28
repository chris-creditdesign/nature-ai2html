import replaceChars from "../replaceChars";
import { extraCharacterReplacements } from "../../../constant_data";

// Characters "<>& are not replaced
const cleanHtmlText = (str: string) =>
  replaceChars(str, extraCharacterReplacements);

export default cleanHtmlText;
