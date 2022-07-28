const truncateString = (str: string, maxlen: number, useEllipsis = false) => {
  // TODO: add ellipsis, truncate at word boundary
  if (str.length > maxlen) {
    str = str.substring(0, maxlen);
    if (useEllipsis) str += "...";
  }
  return str;
};

export default truncateString;
