/**
 *
 * @param path
 * @returns True if file is successfully deleted
 */
const deleteFile = (path: string): boolean => {
  const file = new File(path);
  if (file.exists) {
    file.remove();
    return true;
  }

  return false;
};

export default deleteFile;
