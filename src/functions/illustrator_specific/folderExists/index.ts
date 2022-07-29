const folderExists = (path: string): boolean => {
  return new Folder(path).exists;
};

export default folderExists;
