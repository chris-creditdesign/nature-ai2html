import getScriptDirectory from ".";

const getScriptDirectoryDebug = () => {
  let alertText = "FAIL: getScriptDirectory \r";

  const folder = getScriptDirectory();

  const path = folder.path;
  // We expect the path to be in the form ~/Documents/repos/..

  if (path.split("/")[0] === "~") {
    alertText = "PASS: getScriptDirectory \r";
  }

  return alertText;
};

export default getScriptDirectoryDebug;
