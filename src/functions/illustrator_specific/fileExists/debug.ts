import fileExists from ".";
import getScriptDirectory from "../getScriptDirectory";

const fileExistsDebug = () => {
  let alertText = "FAIL: fileExists \r";

  let folder = getScriptDirectory();

  let should_be_true = fileExists(folder.fullName + "/test/data/config.yml");
  let should_be_false = fileExists("nonsense");

  if (should_be_true && !should_be_false) {
    alertText = "PASS: fileExists \r";
  }

  return alertText;
};

export default fileExistsDebug;
