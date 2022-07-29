import { type ExtendedString } from "src/types/global";
import straightenCurlyQuotes from "../straightenCurlyQuotes";

const straightenCurlyQuotesInsideAngleBrackets = (str: ExtendedString) => {
  // This function's purpose is to fix quoted properties in HTML tags that were
  // typed into text blocks (Illustrator tends to automatically change single
  // and double quotes to curly quotes).
  // thanks to jashkenas
  // var quoteFinder = /[\u201C‘’\u201D]([^\n]*?)[\u201C‘’\u201D]/g;
  const tagFinder = /<[^\n]+?>/g;
  const replacer = (tag: string) => straightenCurlyQuotes(tag);

  return str.replace(tagFinder, replacer);
};

export default straightenCurlyQuotesInsideAngleBrackets;
