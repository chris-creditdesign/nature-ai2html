import readTextFile from ".";
import getScriptDirectory from "../getScriptDirectory";

const readTextFileDebug = () => {
  let alertText = "FAIL: readTextFile \r";

  let folder = getScriptDirectory();

  let should_be_string = readTextFile(
    folder.fullName + "/test/data/config.yml"
  );
  let should_be_empty_string = readTextFile("nonsense");

  if (typeof should_be_string === "string" && should_be_empty_string === "") {
    alertText = "PASS: readTextFile \r";
  }

  return alertText;
};

export default readTextFileDebug;
