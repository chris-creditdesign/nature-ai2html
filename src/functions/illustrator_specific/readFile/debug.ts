import readFile from ".";
import getScriptDirectory from "../getScriptDirectory";

const readFileDebug = () => {
  let alertText = "FAIL: readFile \r";

  let folder = getScriptDirectory();

  let should_be_string = readFile(folder.fullName + "/test/data/config.yml");
  let should_be_null = readFile("nonsense");

  if (typeof should_be_string === "string" && should_be_null === null) {
    alertText = "PASS: readFile \r";
  }

  return alertText;
};

export default readFileDebug;
