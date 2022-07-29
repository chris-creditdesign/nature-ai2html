const saveTextFile = (dest: string, contents: string): void => {
  var fd = new File(dest);
  fd.open("w", "TEXT", "TEXT");
  fd.lineFeed = "Unix";
  fd.encoding = "UTF-8";
  fd.writeln(contents);
  fd.close();
};

export default saveTextFile;
