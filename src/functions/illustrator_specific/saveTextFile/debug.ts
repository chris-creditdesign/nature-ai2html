import saveTextFile from ".";
import getScriptDirectory from "../getScriptDirectory";
import fileExists from "../fileExists";
import readTextFile from "../readTextFile";
import deleteFile from "../deleteFile";

const saveTextFileDebug = () => {
  let alertText = "FAIL: saveTextFile \r";

  let folder = getScriptDirectory();

  let dest = folder.fullName + "/test/data/test.txt";
  let content = "Hello World";

  saveTextFile(dest, content);

  const file_exists = fileExists(dest);
  const file_conent = readTextFile(dest);
  const file_content_matches = file_conent === content + "\n";
  const file_deleted = deleteFile(dest);

  if (file_exists && file_content_matches && file_deleted) {
    alertText = "PASS: saveTextFile \r";
  }

  return alertText;
};

export default saveTextFileDebug;
