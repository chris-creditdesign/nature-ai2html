const addEnclosingTag = (tagName: string, str: string) => {
  let newString = str;
  const openTag = "<" + tagName;
  const closeTag = "</" + tagName + ">";

  if (new RegExp(openTag).test(str) === false) {
    newString = openTag + ">\r" + newString;
  }

  if (new RegExp(closeTag).test(str) === false) {
    newString = newString + "\r" + closeTag;
  }

  return newString;
};

export default addEnclosingTag;
