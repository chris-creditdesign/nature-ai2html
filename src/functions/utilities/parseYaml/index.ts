import parseKeyValueString from "../parseKeyValueString";
import stringToLines from "../stringToLines";

/**
 * Very simple Yaml parsing. Does not implement nested properties and other features
 *
 * @param str
 * @returns
 */
const parseYaml = (str: string) => {
  // TODO: strip comments // var comment = /\s*/
  let o = {};
  const lines = stringToLines(str);

  for (var i = 0; i < lines.length; i++) {
    o = parseKeyValueString(lines[i], o);
  }

  return o;
};

export default parseYaml;
