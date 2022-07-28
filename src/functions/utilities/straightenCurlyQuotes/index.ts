const straightenCurlyQuotes = (str: string) =>
  str.replace(/[\u201C\u201D]/g, '"').replace(/[‘’]/g, "'");

export default straightenCurlyQuotes;
