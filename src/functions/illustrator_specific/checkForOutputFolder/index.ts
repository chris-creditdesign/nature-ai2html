import folderExists from "../folderExists";
import message from "src/functions/ai2html_specific/message";
import warn from "src/functions/ai2html_specific/warn";

const checkForOutputFolder = (
  folderPath: string,
  nickname = "output folder",
  messages: string[] = [],
  warnings: string[] = []
) => {
  const folderAlreadyExists = folderExists(folderPath);
  let newFolderCreated = false;

  if (!folderAlreadyExists) {
    const new_output_folder = new Folder(folderPath);
    newFolderCreated = new_output_folder.create();

    if (newFolderCreated) {
      messages = message(
        `The ${nickname} folder did not exist, so the folder was created.`
      );
    } else {
      warnings = warn(
        `The ${nickname} folder did not exist and could not be created.`
      );
    }
  }

  return { folderAlreadyExists, newFolderCreated, messages, warnings };
};

export default checkForOutputFolder;
