// TODO: This function should make use of folderExists.
const checkForOutputFolder = (folderPath, nickname) => {
  var outputFolder = new Folder(folderPath);
  if (!outputFolder.exists) {
    var outputFolderCreated = outputFolder.create();
    if (outputFolderCreated) {
      // TODO:
      //   message(
      //     "The " + nickname + " folder did not exist, so the folder was created."
      //   );
    } else {
      // TODO:
      //   warn(
      //     "The " + nickname + " folder did not exist and could not be created."
      //   );
    }
  }
};

export default checkForOutputFolder;
