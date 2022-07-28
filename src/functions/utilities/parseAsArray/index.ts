import trim from "../trim/index";

const parseAsArray = (str: string) => {
  str = trim(str).replace(/[\s,]+/g, ",");
  return str.length === 0 ? [] : str.split(",");
};

export default parseAsArray;
