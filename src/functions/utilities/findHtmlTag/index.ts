// Not very robust -- good enough for printing a warning
const findHtmlTag = (str: string): string | null => {
  let match;
  if (str.indexOf("<") > -1) {
    // bypass regex check
    match = /<(\w+)[^>]*>/.exec(str);
  }
  return match ? match[1] : null;
};

export default findHtmlTag;
