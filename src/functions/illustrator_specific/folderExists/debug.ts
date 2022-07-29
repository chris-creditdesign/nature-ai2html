import folderExists from ".";
import getScriptDirectory from "../getScriptDirectory";

const folderExistsDebug = (): string => {
  let alertText = "FAIL: folderExists \r";

  let folder = getScriptDirectory();

  let should_be_true = folderExists(folder.fullName + "/test/data/text");
  let should_be_false = folderExists("nonsense");

  if (should_be_true && !should_be_false) {
    alertText = "PASS: folderExists \r";
  }

  return alertText;
};

export default folderExistsDebug;
