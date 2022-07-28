const stripTag = (tagName: string, str: string) => {
  const open = new RegExp("<" + tagName + "[^>]*>", "g");
  const close = new RegExp("</" + tagName + ">", "g");
  return str.replace(open, "").replace(close, "");
};

export default stripTag;
