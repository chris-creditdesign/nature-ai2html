import checkForOutputFolder from ".";
import getScriptDirectory from "../getScriptDirectory";

const checkForOutputFolderDebug = (): string => {
  let alertText = "FAIL: checkForOutputFolder \r";

  let folder = getScriptDirectory();

  let should_be_true = checkForOutputFolder(
    folder.fullName + "/test/data/text"
  ).folderAlreadyExists;

  let should_be_false = checkForOutputFolder(
    folder.fullName + "/test/data/nonsense"
  ).folderAlreadyExists;

  const temp_folder = new Folder(folder.fullName + "/test/data/nonsense");
  temp_folder.remove();

  if (should_be_true && !should_be_false) {
    alertText = "PASS: folderExists \r";
  }

  return alertText;
};

export default checkForOutputFolderDebug;
