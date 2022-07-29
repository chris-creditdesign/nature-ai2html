import deleteFile from ".";
import getScriptDirectory from "../getScriptDirectory";
import fileExists from "../fileExists";

const deleteFileDebug = () => {
  let alertText = "FAIL: deleteFile \r";

  const folder = getScriptDirectory();

  const original_path = folder.fullName + "/test/data/text/oneline_cr.txt";
  const copy_path = folder.fullName + "/test/data/text/copy.txt";

  const original_file = new File(original_path);
  original_file.copy(copy_path);

  if (fileExists(copy_path)) {
    const file_deleted = deleteFile(copy_path);

    if (file_deleted) {
      alertText = "PASS: deleteFile \r";
    }
  }
  return alertText;
};

export default deleteFileDebug;
