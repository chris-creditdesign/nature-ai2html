// obj: JS object containing css properties and values
// indentStr: string to use as block CSS indentation
const formatCss = (
  obj: Record<string, string | number>,
  indentStr: " " | "\t" | "\t\t"
) => {
  let css = "";
  let isBlock = !!indentStr;
  for (let key in obj) {
    if (isBlock) {
      css += "\r" + indentStr;
    }
    css += key + ":" + obj[key] + ";";
  }
  if (css && isBlock) {
    css += "\r";
  }
  return css;
};

export default formatCss;
