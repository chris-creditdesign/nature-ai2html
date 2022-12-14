const readFile = (path: string): string | false => {
  let content: string | false = false;
  const file = new File(path);
  if (file.exists) {
    file.open("r");
    content = file.read();
    file.close();
  }

  // TODO: add a warning if the file doesn't exist
  //    else {
  //     newWarnings = warn(path + " could not be found.", newWarnings);
  //   }
  return content;
};

export default readFile;
