import readFile from "../readFile/index";

const readTextFile = (path: string): string => {
  // TODO: Why do we need this when we have a function that reads a file?
  // This function used to use File#eof and File#readln(), but
  // that failed to read the last line when missing a final newline.
  return readFile(path) || "";
};

export default readTextFile;
