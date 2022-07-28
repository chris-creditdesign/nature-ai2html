import trim from "../trim/index";
import json2 from "../../../lib/json2/index";

const parseKeyValueString = (
  str: string,
  myObject: Record<string, any> = {}
) => {
  const JSON = json2();
  const dqRxp = /^"(?:[^"\\]|\\.)*"$/;
  let parts = str.split(":");
  let k;
  let v;

  if (parts.length > 1) {
    k = trim(parts.shift());
    v = trim(parts.join(":"));
    if (dqRxp.test(v)) {
      v = JSON.parse(v); // use JSON library to parse quoted strings
    }
    myObject[k] = v;
  }

  return myObject;
};

export default parseKeyValueString;
