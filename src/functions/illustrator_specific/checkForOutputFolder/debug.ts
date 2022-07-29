import checkForOutputFolder from ".";
import getScriptDirectory from "../getScriptDirectory";

const checkForOutputFolderDebug = (): string => {
  let alertText = "FAIL: checkForOutputFolder \r";

  let folder = getScriptDirectory();

  //   let should_be_true = folderExists(folder.fullName + "/test/data/text");
  //   let should_be_false = folderExists("nonsense");

  //   if (should_be_true && !should_be_false) {
  //     alertText = "PASS: folderExists \r";
  //   }

  return alertText;
};

export default checkForOutputFolderDebug;
